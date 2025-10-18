fn site_category site:obj id:uint
 check is_obj site
 check is_uint id

 let entity entity_init site site.categories id "?c="
 let item entity.item
 let title entity.title
 let breadcrumb entity.breadcrumb

 //breadcrumb

 let length 77

 breadcrumb_push breadcrumb "Catégories" "?v=cat"
 breadcrumb_push breadcrumb title "" length

 //posts

 let posts arr

 for site.posts
  if not contain v.categories id
   cont

  push posts v
 end

 let table_posts dom_posts_simple posts

 //render

 let page entity_render entity

 assign document.title title

 //nav bottom

 let spacer dom_spacer
 let nav_bottom dom_select page "#nav-bottom"

 dom_remove nav_bottom

 dom_push body page
 dom_push body table_posts
 dom_push body spacer
 dom_push body nav_bottom
end
