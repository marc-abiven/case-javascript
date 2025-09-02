fn measure_text x
 check is_str x

 let span dom_span

 dom_html span x
 
 span.style.font font

 dom_push body span

 let width span.offsetWidth
 let height span.offsetHeight

 span.remove

 ret obj width height
end
