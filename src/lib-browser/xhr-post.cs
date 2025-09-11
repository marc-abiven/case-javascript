gn xhr_post url:str data:def

 let xhr new XMLHttpRequest

 var result null
 var done false

 fn on_load x:obj
  let s typeof xhr.response
  let response xhr.response

  if is_json response
   assign result json_decode response
  else
   assign result response

  assign done true
 end

 fn on_error x:obj
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

 let payload json_encode data

 xhr.open "post" url
 xhr.send payload

 while true
  if done
   brk

  yield
 end

 ret result
end
