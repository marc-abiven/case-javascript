gn server_load server:obj request:obj
 //on data

 var finished false
 var result ""
 var error null

 fn on_data x:obj
  let s to_str x

  assign result concat result s
 end

 //on end

 fn on_end
  assign finished true
 end

 //on error

 fn on_error x:obj
  assign error x
  assign finished true
 end

 //main

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