gn xhr_get url with_headers
 check is_str url

 if is_undef with_headers
  ret run xhr_get url false

 let xhr new XMLHttpRequest
 var result ""
 var done false
 var error false

 fn on_load
  assign result xhr.response
  assign done true
 end

 fn on_error
  assign result false
  assign done true
  assign error true
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

 check is_false error

 if is_json result
  assign result json_decode result

 if with_headers
  let headers obj
  let s xhr.getAllResponseHeaders
  let s trim_r s
  let a split s "\r\n"
  
  forof a
   let parts split v ":"
   let key shift parts
   let key trim key
   let value join parts ":"
   var value trim value
   
   if is_numeric value
    assign value to_num value
   
   put headers key value
  end  

  ret obj result headers
 end
 
 ret result
end
