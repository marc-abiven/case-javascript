gn xhr url:str method:str data with_headers
 if is_undef with_headers
  ret run xhr url method data false

 //on load

 let xhr new XMLHttpRequest
 var result null
 var done false
 var error false

 fn on_load x:obj
  assign result xhr.response
  assign done true
 end

 //on error

 fn on_error x:obj
  let header xhr.getAllResponseHeaders

  if is_full header
   let o obj url header
   let s obj_option o

   log "xhr" s
  else
   let o obj url
   let s obj_option o   
   
   log "xhr" s
  end

  assign error true
  assign result false
  assign done true
 end

 //main

 assign xhr.onload on on_load
 assign xhr.onerror on on_error

 if is_def data
  let payload json_encode data

  xhr.open method url
  xhr.send payload
 else
  xhr.open method url
  xhr.send
 end

 while true
  if done
   brk

  yield
 end

 check not error

 if is_json result
  assign result json_decode result

 if with_headers
  let headers obj
  let s xhr.getAllResponseHeaders
  let s trim_r s
  let a split s "\r\n"

  for a
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
