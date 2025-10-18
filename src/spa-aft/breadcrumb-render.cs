fn breadcrumb_render x:arr
 let r dom_div

 for x
  let children dom_children r

  if is_full children
   let separator dom_span

   dom_text separator " > "
   dom_color separator "gray"

   dom_push r separator
  end

  var title v.title
  let url v.url
  var length v.length
  var tooltip false

  if different length 0
   assign title cut_r title length
   assign tooltip true
  end

  if is_empty url
   let span dom_span

   dom_text span title

   if tooltip
    dom_title span v.title

   dom_push r span
  else
   let a dom_a

   dom_text a title
   dom_href a url

   if tooltip
    dom_title span v.title

   dom_push r a
  end
 end

 let last dom_children r
 let last back last

 dom_bold last

 ret r
end
