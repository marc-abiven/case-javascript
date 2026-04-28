fn server_request server:obj request:obj response:obj
 let method to_lower request.method
 let host request.headers.host

 assign response.statusCode 200

 response.setHeader "access-control-allow-origin" "*"
 response.setHeader "content-type" "text/html; charset=utf-8"

 if is_undef host
  response.end "error"
  ret
 end

 let ip request.socket.remoteAddress

 if is_undef ip
  response.end "error"
  ret
 end

 var protocol "http"

 if request.socket.encrypted
  assign protocol "https"

 var remote ip_host ip

 if is_null remote
  assign remote ip

 let url concat protocol "://" host request.url

 if not is_url url
  response.end "error"
  ret
 end

 let url url_parse url
 let s to_lit url.href

 log method remote s

 let query obj host url method remote request response

 push server.queries query
end