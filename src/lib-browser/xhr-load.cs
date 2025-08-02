gn xhr_load x
 check is_str x
 
 let xhr new XMLHttpRequest
 var result null
 var done false

 fn on_load
  let response xhr.response   
  
  if is_json response
   assign result json_decode response
  else
   assign result response
   
  assign done true
 end
 
 assign xhr.onload on on_load
 
 xhr.open "get" x
 xhr.send
  
 while true
  if done
   brk
    
  yield
 end
 
 ret result
end
