//~ function measure_text(x)
//~ {
 //~ check(is_str,x)

 //~ const context=canvas.getContext("2d") 
 //~ const o=context.measureText(x) 
 //~ const width=trunc(o.width)
 //~ const height=add(o.fontBoundingBoxAscent,o.fontBoundingBoxDescent)
 
 //~ return {width,height}
//~ }

function measure_text(x)
{
 check(is_str,x)
 
 const o=document.createElement("span")
 
 o.innerHTML=x
 o.style.font=font
 
 document.body.appendChild(o)
 
 const width=o.offsetWidth
 const height=o.offsetHeight
 
 o.remove()
 
 return {width,height}
}
