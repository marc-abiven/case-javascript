fn on_any_data server:obj host:str url:obj method:str remote:str request:obj response:obj
 //~ check is_obj server
 //~ check is_str host
 //~ check is_obj url
 //~ check is_str method
 //~ check is_str remote
 //~ check is_obj request
 //~ check is_obj response

 response.setHeader "content-type" "application/json"

 ret "json"
end
