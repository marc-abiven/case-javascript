fn url_parse x
 check is_str x

 let url new URL x
 let href url.href
 let protocol strip_r url.protocol ":"
 let user url.username
 let password url.password
 let host url.hostname
 let port url.port
 let path url.pathname
 let hash url.hash
 let params obj

 forof url.searchParams.keys
  let value url.searchParams.get v

  put params v value
 end

 ret obj href protocol user password host port path params hash
end