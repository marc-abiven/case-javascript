fn dom_patch x:obj dimension:str
 for dom_by_tag x "br"
  dom_remove v
 end

 for dom_by_tag x "p"
  let html dom_html v
  let html trim html

  if is_empty html
   dom_remove v
 end

 for dom_by_tag x "div"
  let s dom_class v

  if not contain s "wp-block-spacer"
   cont

  v.style.removeProperty "height"
 end

 for dom_by_tag x "a"
  let title dom_title v
  let text dom_text v
  let url dom_href v

  if same text url
   cont

  if is_empty title
   dom_title v url
 end

 for dom_by_tag x "img"
  //skip featured image

  let id dom_id v

  if same id "featured"
   cont

  //size

  dom_max_width v dimension
  dom_max_height v dimension
  dom_padding_top v css.unit
  dom_padding_bottom v css.unit
  dom_padding_right v css.unit
  dom_float v

  //attributes

  v.removeAttribute "srcset"
  v.removeAttribute "sizes"

  v.removeAttribute "width"
  v.removeAttribute "height"

  v.style.removeProperty "width"
  v.style.removeProperty "height"

  assign v.style.clear "left"

  //title

  var url dom_src v

  if not is_url url
   cont

  if match_l url "https://transhumanistes.com"
   assign url url_parse url
   assign url path_file url.path
  else
   assign url_beautify url

  dom_title v url
 end

 for dom_by_tag x "*"
  v.style.removeProperty "background-color"
 end
end
