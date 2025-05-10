function cli_resize(x)
{
 check(is_obj,x)
 
 let width=mul(0.98,innerWidth)
 let height=mul(0.94,innerHeight)
 
 width=trunc(width)
 height=trunc(height)
 
 canvas.width=width
 canvas.height=height
 
 cli_draw(x)
}
