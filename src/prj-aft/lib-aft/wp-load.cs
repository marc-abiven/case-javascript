gn wp_load x:str
 let r arr
 var page 1

 while true
  let url concat x "?page=" page "&per_page=100"
  let response run url_get url true
  let count get response.headers "x-wp-totalpages"

  if is_def wp_count
   assign wp_count inc wp_count

  append r response.result

  if same page count
   ret r

  assign page inc page

  yield
 end
end
