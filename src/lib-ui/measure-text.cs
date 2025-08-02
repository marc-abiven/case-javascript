fn measure_text x
 check is_str x
 
 let o document.createElement "span"
 
 o.innerHTML x
 o.style.font font
 
 body.appendChild o
 
 let width o.offsetWidth
 let height o.offsetHeight
 
 o.remove
 
 ret obj  width height
end

//~ function measure_text(x)
//~ {
 //~ check(is_str,x)

 //~ const context=canvas.getContext("2d") 
 //~ const o=context.measureText(x) 
 //~ const width=trunc(o.width)
 //~ const height=add(o.fontBoundingBoxAscent,o.fontBoundingBoxDescent)
 
 //~ return {width,height}
//~ }
