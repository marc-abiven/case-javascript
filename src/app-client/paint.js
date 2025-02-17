function paint(x)
{
 check(is_obj,x)
 
 const context=canvas.getContext("2d")
 
 context.fillStyle="black"
 context.fillRect(0,0,canvas.clientWidth,canvas.clientHeight)
 
 context.lineWidth=1
 
 const colors=arr("green","blue","orange","red","yellow","cyan","white","magenta")
 
 const width=canvas.width
 const height=div(canvas.height,dimension)
 
 const chans=head(x.chans,buffer_limit)
 
 for(let i=0;i<dimension;i++)
 {
  const color=at(colors,i)
  let chan=chan_at(chans,i)
  
  chan=chan_plot(chan,width,height)
  
  const y=mul(height,i)

  context.beginPath()
  context.strokeStyle=color  
  
  for(const k in chan)
  {
   const i=to_i(k)
   const v=at(chan,i)
   const x=v.x
   const y1=add(y,v.y)
   
   if(same(i,0))
    context.moveTo(x,y1)
   else
    context.lineTo(x,y1)
  }
  
  context.stroke()
 }
 
 //pane_render(pane,context)
 //log(pane)
}
