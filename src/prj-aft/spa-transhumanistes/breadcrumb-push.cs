fn breadcrumb_push x:arr title:str url length
 if is_undef url
  ret breadcrumb_push x title ""

 check is_str url

 if is_undef length
  ret breadcrumb_push x title url 0

 check is_uint length

 let o obj title url length

 push x o
end
