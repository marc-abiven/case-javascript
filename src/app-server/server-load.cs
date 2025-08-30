gn server_load server request
 check is_obj server
 check is_obj request
 
 var finished false
 var result ""
 var error null
 
 fn on_data x
  check is_obj x
  
  let s to_str x
  
  assign result concat result s
 end

 fn on_end
  assign finished true
 end

 fn on_error x
  check is_obj x
  
  assign error x
  assign finished true
 end

 let on_data on on_data
 let on_end on on_end
 
 request.on "data" on_data
 request.on "end" on_end
 request.on "error" on_error
 
 while not finished
  yield
 end
 
 if is_obj error
  throw error
 
 if is_json result
  ret json_decode result
  
 ret result
end
