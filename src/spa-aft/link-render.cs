fn link_render x:obj
 let r dom_a

 dom_href r x.url
 dom_text r x.title

 ret r
end
