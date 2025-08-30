gn xhr_get url xhr
 check is_str url

 if is_undef xhr
  let xhr new XMLHttpRequest
  
  ret run xhr_get url xhr
 end
 
 check is_obj xhr

 var result null
 var done false

 fn on_load
  let s typeof xhr.response
  let response xhr.response

  if is_json response
   assign result json_decode response
  else
   assign result response

  assign done true
 end

 fn on_error
  let url to_lit url
  let url concat "url=" url
  
  let header xhr.getAllResponseHeaders 
  
  if is_full header  
   let header to_lit header
   let header concat "header=" header  
  
   log "xhr" header url
  else
   log "xhr" url

  assign result false
  assign done true
 end

 assign xhr.onload on on_load
 assign xhr.onerror on on_error

 xhr.open "get" url
 xhr.send

 while true
  if done
   brk

  yield
 end
 
 ret result
end
