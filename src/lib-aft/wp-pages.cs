gn wp_pages
 let a arr
 let a arr

 forof run wp_load "https://transhumanistes.com/wp-json/wp/v2/pages"
  if contain v.class_list "post-password-required"
   cont
   
  let id v.id
  let parent v.parent
  let date date_decode v.date
  let url v.link
  let title v.title.rendered
  let title dom_unescape title
  let title trim title
  let content v.content.rendered
  let content dom_unescape content
  let excerpt v.excerpt.rendered
  let excerpt dom_unescape excerpt
  let o obj id parent date url title content excerpt
  
  push a o
 end

 ret wp_fold a
end
