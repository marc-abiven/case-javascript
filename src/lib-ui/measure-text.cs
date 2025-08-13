fn measure_text x
 check is_str x
 
 let o dom_span
 
 o.innerHTML x
 o.style.font font
 
 body.append o
 
 let width o.offsetWidth
 let height o.offsetHeight
 
 o.remove
 
 ret obj  width height
end
