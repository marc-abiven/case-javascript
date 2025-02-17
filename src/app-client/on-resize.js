function on_resize()
{
 const width=mul(0.98,innerWidth)
 const height=mul(0.94,innerHeight)
 
 canvas.width=width
 canvas.height=height
 
 paint(data)
} 
