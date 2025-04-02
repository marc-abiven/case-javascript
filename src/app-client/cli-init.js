function cli_init()
{
 const cli=obj()

 cli.frame=0
 cli.byte=0
 cli.draw=0
 cli.speed=0
 cli.offset=0
 cli.chans=arr()
 cli.scroll=arr()
 
 const html=dom_html()
 const body=document.body
 const canvas=document.createElement("canvas")
 
 document.title="Coglab EEG project"
 html.style.backgroundColor="black"
 
 canvas.id="canvas"
 canvas.style.position="absolute"
 canvas.style.transform="translate(-50%,-50%)"
 canvas.style.top="50%"
 canvas.style.left="50%"
 
 body.appendChild(canvas)

 function on_double_click()
 {
  if(is_null(document.fullscreenElement))
   canvas.requestFullscreen()
  else
   document.exitFullscreen()
 }

 canvas.ondblclick=on(on_double_click)
 
 cli_resize(cli)
 
 const xhr=new XMLHttpRequest
 
 function restart_update(x)
 {
  if(is_undef(x))
   return restart_update(0.1)
   
  check(is_num,x)
  check(gte,x,0)
   
  time_timeout(on_update,x)
 }

 function restart_stat()
 {
  time_timeout(on_stat,2)
 }

 function restart_scroll()
 {
  time_timeout(on_scroll,0)
 }

 function on_load()
 {
  const response=xhr.response
  const o=json_decode(response)
  
  cli.byte=add(cli.byte,response.length)
  cli.speed=o.speed
  
  if(lt(o.offset,cli.offset))
  {
   cli.chans=arr()
   cli.scroll=o.chans   
  }
  else
  {
   const length=sub(o.offset,cli.offset)
   
   cli.scroll=tail(o.chans,length)
  }

  cli.offset=o.offset
  
  restart_update()
 }

 function on_error()
 {
  log("xhr",to_lit("error"))
  
  restart_update(4)
 }

 function on_update()
 {
  xhr.onload=on(on_load)
  xhr.onerror=on(on_error)
  xhr.open("get","/data")
  xhr.send()
 }
 
 function on_scroll()
 {
  const fps=cli_fps(cli)
  
  if(lt(fps,30))
  {
   let period=time_now()
   
   period=div(period,cli.frame)

   let step=mul(cli.speed,period)

   step=trunc(step)
   
   if(same(step,0))
    step=1
   
   const a=head(cli.scroll,step)
   
   append(cli.chans,a)
   shift(cli.scroll,a.length)

   const limit=data_limit(cli)
   
   if(gt(cli.chans.length,limit))
   {
    const overflow=sub(cli.chans.length,limit)
    
    shift(cli.chans,overflow)
   }

   cli_draw(cli)
  }
  
  restart_scroll()
 }
 
 function on_stat()
 {
  const sharp=concat("#",cli.frame)
  
  let bandwidth=endpoint_bandwidth(cli)
  
  bandwidth=concat(bandwidth,"Kb/s")
  
  const speed=concat(cli.speed,"row/s")

  let fps=cli_fps(cli)
  
  fps=concat(fps,"fps")
  
  log("stat",sharp,bandwidth,speed,fps)
  
  restart_stat()
 }
 
 restart_update()
 restart_scroll()
 restart_stat()
 
 return cli
} 
