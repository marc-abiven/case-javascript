fn on_any_any server host url method remote request response
 check is_obj server
 check is_str host
 check is_obj url
 check is_str method
 check is_str remote
 check is_obj request
 check is_obj response

 ret "any any"
end