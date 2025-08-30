fn server_request server request response
 check is_obj server
 check is_obj request
 check is_obj response

 let method to_lower request.method
 let host request.headers.host
 let ip request.socket.remoteAddress

 if not is_str host
  let s json_encode host
  
  log "invalid-host" host
  mail author "invalid-host" host
  
  response.end "error"
  
  ret
 end
 
 var protocol "http"
 
 if request.socket.encrypted
  assign protocol "https"

 var remote ip_host request.socket.remoteAddress
 
 if is_null remote
  assign remote ip
 
 let url concat protocol "://" host request.url
 
 if not is_url url
  let s to_lit url
  
  //log "invalid-url" s
  //mail author "invalid-url" s
  
  response.end "error"
  
  ret
 end
 
 let url url_parse url
 let s to_lit url.href

 log method remote s
 
 assign response.statusCode 200
 
 response.setHeader "access-control-allow-origin" "*"
 response.setHeader "content-type" "text/html; charset=utf-8"

 let query obj host url method remote request response

 push server.queries query
end
