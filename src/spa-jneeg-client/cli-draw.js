function cli_draw(x)
{
 check(is_obj,x)
 
 const context=canvas.getContext("2d")

 context.fillStyle="black"
 context.fillRect(0,0,canvas.clientWidth,canvas.clientHeight)
 
 context.lineWidth=1
 
 const width=canvas.width
 const height=div(canvas.height,dimension)
 const limit=data_limit(x)
 
 for(let i=0;i<dimension;i++)
 {
  const color=at(colors,i)
  const chan=chan_at(x.chans,i)
  const plot=chan_plot(chan,width,height,limit)
  const y=mul(height,i)

  context.beginPath()
  context.strokeStyle=color
  
  for(const k in plot)
  {
   const i=to_i(k)
   const v=at(plot,i)
   const x=v.x
   const y1=add(y,v.y)
   
   if(same(i,0))
    context.moveTo(x,y1)
   else
    context.lineTo(x,y1)
  }
  
  context.stroke()
 }
}
