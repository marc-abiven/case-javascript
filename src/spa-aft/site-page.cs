fn site_page site:obj id:uint
 let entity entity_init site site.pages id "?pg="
 let item entity.item
 let title entity.title
 let breadcrumb entity.breadcrumb
 let detail entity.detail

 //breadcrumb

 let length 77

 breadcrumb_push breadcrumb "Pages" "?v=pg"
 breadcrumb_push breadcrumb title "" length

 //render

 let page entity_render entity

 assign document.title title

 dom_push body page
end
