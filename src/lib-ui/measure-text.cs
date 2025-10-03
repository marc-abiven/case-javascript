fn measure_text x:str
 let span dom_span

 dom_html span x

 span.style.fontFamily font_family
 span.style.fontSize font_size

 dom_push body span

 let width span.offsetWidth
 let height span.offsetHeight

 span.remove

 ret obj width height
end
