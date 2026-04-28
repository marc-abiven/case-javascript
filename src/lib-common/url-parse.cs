fn url_parse x:str
 let url new URL x
 let href url.href
 let protocol strip_r url.protocol ":"
 let user url.username
 let password url.password
 let host url.hostname
 let port url.port
 let path url.pathname
 let hash url.hash
 let args obj

 forof url.searchParams.keys //real forof, not an array
  var value url.searchParams.get v

  if is_json value
   assign value json_decode value

  put args v value
 end

 ret obj href protocol user password host port path args hash
end
