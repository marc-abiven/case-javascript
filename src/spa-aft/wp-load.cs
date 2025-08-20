gn wp_load x
 check is_str x

 let r arr
 var next true
 var page 1

 while next
  let xhr new XMLHttpRequest
  let url concat x "?page=" page "&per_page=100"
  let pages run xhr_load url xhr
  let count xhr.getResponseHeader "x-wp-totalpages"
  let count to_uint count

  append r pages

  if same page count
   assign next false

  assign page inc page

  yield
 end

 ret r
end
