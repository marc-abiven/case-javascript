fn measure_text x:str
 let span dom_span

 dom_html span x

 h_font_family span font_family
 h_font_size span font_size

 dom_push body span

 let width span.offsetWidth
 let height span.offsetHeight

 span.remove

 ret obj width height
end
