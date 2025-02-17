function pane_render(x,y)
{
 check(is_obj,x)
 check(is_obj,y)

 y.fillStyle=x.back
 y.fillRect(x.x,x.y,x.width,x.height)
 
 y.beginPath()
 
 y.strokeStyle=x.fore
 
 y.moveTo(x.x,x.y) 
 y.lineTo(x.x+x.width,x.y)
 y.lineTo(x.x+x.width,x.y+x.height)
 y.lineTo(x.x.y,x.y+x.height)
 y.moveTo(x.x,x.y) 

 y.stroke() 
}
