fn entity_init site:obj items:arr id:uint url_fragment:str
 //find previous

 fn find_previous x:obj
  var r back items

  for items
   if same v.id x.id
    brk

   assign r v
  end

  ret r
 end

 //find next

 fn find_next x:obj
  for items
   if different v.id x.id
    cont

   if is_last items i
    ret front items

   let next inc i

   ret at items next
  end

  stop
 end

 //main

 let item wp_find items id
 let title wp_title item
 let previous find_previous item
 let previous concat url_fragment previous.id
 let next find_next item
 let next concat url_fragment next.id
 let breadcrumb breadcrumb_init

 breadcrumb_push breadcrumb "Accueil" "."

 //image

 var image null

 if has item "image"
  if is_str item.image
   if not contain item.content item.image
    assign image item.image
   end
  end
 end

 //details

 let detail obj

 assign detail.Index item.index

 if has item "url"
  assign detail.URL link_init item.url

 ret obj item items title breadcrumb next previous detail
end
