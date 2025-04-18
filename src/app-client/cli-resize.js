function cli_resize(x)
{
 check(is_obj,x)
 
 const width=mul(0.98,innerWidth)
 const height=mul(0.94,innerHeight)
 
 canvas.width=width
 canvas.height=height
 
 cli_draw(x)
}
