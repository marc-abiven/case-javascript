gn http_get url:str with_headers
 if is_undef with_headers
  ret run http_get url false

 //get module

 var result ""
 var headers obj
 var error null
 var done false

 fn get_module url:str
  let s to_lower url

  if match_l s "http:"
   ret http
  elseif match_l s "https:"
   ret https
  else
   stop
 end

 //on request

 fn on_request response:obj
  forin response.headers
   var v get response.headers k

   if is_numeric v
    assign v to_num v

   put headers k v
  end

  let on_data on on_data
  let on_end on on_end

  response.on "data" on_data
  response.on "end" on_end
 end

 //on data

 fn on_data x:obj
  let s to_str x

  assign result concat result s
 end

 //on end

 fn on_end
  assign done true
 end

 //on error

 fn on_error x:obj
  assign error x
 end

 //main

 let module get_module url
 let request module.get url on_request
 let on_error on on_error

 request.on "error" on_error

 while true
  if done
   brk

  if is_obj error
   throw error

  yield
 end

 if is_json result
  assign result json_decode result

 if with_headers
  ret obj result headers

 ret result
end