function on_init()
{
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
 
 const n=font_height()
 
 pane.x=n
 pane.y=n
 
 function on_double_click()
 {
  if(is_null(document.fullscreenElement))
   canvas.requestFullscreen()
  else
   document.exitFullscreen()
 }

 canvas.ondblclick=on_double_click
 
 on_resize()
 
 const xhr=new XMLHttpRequest

 let byte=0
 
 const period=0.05

 const next=obj()
 
 merge(next,data)
 
 function throttle()
 {
  const bandwidth=get_bandwidth()

  //return false
  return gt(bandwidth,256)
 }
 
 function get_bandwidth()
 {
  let n=time_now()
  
  n=div(byte,n)
  n=div(n,1024)
  
  return trunc(n)
 }

 function get_speed()
 {
  const row=add(next.offset,next.chans.length)
  
  let n=time_now()
  
  n=div(row,n)
  
  return trunc(n)
 }

 function on_load()
 {
  byte=add(byte,xhr.response.length)
  
  const o=json_decode(xhr.response)
  
  if(different(o.offset,next.offset))  
   merge(next,o)

  restart_update()
 }

 function on_error()
 {
  log("xhr",to_lit("error"))
  
  restart_update(4)
 }

 function on_update()
 {
  if(throttle())
  {
   restart_update()
   
   return
  }
  
  xhr.onload=on_load
  xhr.onerror=on_error
  xhr.open("get","/data")
  xhr.send()
 }
 
 function on_scroll()
 {
  const frequency=div(1,period)
  
  let n=div(next.chans.length,frequency)

  n=trunc(n)

  const rows=slice_l(next.chans,n)
    
  shift(next.chans,n)
  append(data.chans,rows)
  
  if(gt(data.chans.length,buffer_limit))
   shift(data.chans,n)
   
  //log(n,data,next)
  
  paint(data)
  restart_scroll()
 }

 function on_stat()
 {
  let bandwidth=get_bandwidth()
  
  bandwidth=concat(bandwidth,"Kb/s")

  let speed=get_speed()
  
  speed=concat(speed,"row/s")
  
  log("stat",bandwidth,speed)
  
  restart_stat()
 }
 
 function restart_update(x)
 {
  if(is_undef(x))
   return restart_update(0.1)
   
  check(is_num,x)
  check(gte,x,0)
   
  time_timeout(on_update,x)
 }

 function restart_scroll()
 {
  time_timeout(on_scroll,period)
 }

 function restart_stat()
 {
  time_timeout(on_stat,1)
 }
 
 restart_update()
 restart_scroll()
 restart_stat()
} 
