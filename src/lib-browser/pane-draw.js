function pane_draw(x,y)
{
 check(is_obj,x)
 check(is_obj,y)
 
 const context=y.getContext("2d")   
 const _x=x.x
 const _y=x.y
 const _width=x.width
 const _height=x.height
 
 context.fillStyle=x.back
 context.fillRect(_x,_y,_width,_height)
 
 context.beginPath()
 
 context.strokeStyle=x.fore
 
 context.moveTo(_x,_y) 
 context.lineTo(_x+_width,_y)
 context.lineTo(_x+_width,_y+_height)
 context.lineTo(_x,_y+_height)
 context.lineTo(_x,_y)

 context.stroke()
 
 const padding=x.padding
 const text_height=font_height()
 
 context.font=font
 context.fillStyle=x.fore
 context.fillText(x.text,_x+padding,_y+padding+text_height)
 //context.fillText(x.text,_x+padding,_y+padding)
 
 for(const v of x.children)
 {
  const o=obj()
  
  pane_draw(v,y)
 }
}
