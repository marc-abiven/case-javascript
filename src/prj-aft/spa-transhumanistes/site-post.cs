fn site_post site:obj id:uint
 let entity entity_init site site.posts id "?p="
 let item entity.item
 let title entity.title
 let breadcrumb entity.breadcrumb
 let detail entity.detail
 let categories item.categories

 //breadcrumb

 let length is_firefox
 let length iif length 85 84

 breadcrumb_push breadcrumb title "" length

 //details

 let author wp_by_name site.authors item.author
 let url concat "?a=" author.id

 assign detail.Auteur link_init url item.author
 assign detail.Vues item.view

 for categories
  let n inc i
  let category wp_find site.categories v

  var key "Catégorie"

  if is_many categories
   assign key concat key " #" n

  let url concat "?c=" category.id
  let link link_init url category.title

  put detail key link
 end

 //render

 let page entity_render entity

 assign document.title title

 dom_push body page
end
