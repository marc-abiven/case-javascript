gn xhr_load x y
 check is_str x
 
 if is_undef y
  let xhr new XMLHttpRequest
  
  ret run xhr_load x xhr
 end
 
 check is_obj y
 
 var xhr y
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
  let s to_lit "error"
  
  log "xhr" s
  
  assign result false
  assign done true
 end

 assign xhr.onload on on_load
 assign xhr.onerror on on_error
 
 xhr.open "get" x
 xhr.send
  
 while true
  if done
   brk
    
  yield
 end
 
 ret result
end
