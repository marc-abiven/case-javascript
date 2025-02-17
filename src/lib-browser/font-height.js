function font_height()
{
 const canvas=document.createElement("canvas")
 const context=canvas.getContext("2d")
 const o=context.measureText("M")
 
 canvas.remove()
 
 return sub(o.fontBoundingBoxAscent,o.fontBoundingBoxDescent)
}
