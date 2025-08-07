gn wp_pages
 let a arr
 
 forof run wp_load "https://transhumanistes.com/wp-json/wp/v2/pages"
  let id v.id
  let parent v.parent
  let date date_decode v.date  
  let url v.link
  let title v.title.rendered
  let content v.content.rendered
  let excerpt v.excerpt.rendered
  let o obj id parent date url title content excerpt
  
  push a o
 end
 
 ret wp_fold a
end
