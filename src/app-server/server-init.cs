fn server_init credentials
 check is_obj credentials
 
 var server null

 fn SNICallback server callback
  check is_str server
  check is_fn callback

  trace "server" server

  if not has credentials server
   ret

  let credential get credentials server
  let context tls.createSecureContext credential

  callback null context
 end
 
 fn on_request request response
  check is_obj request
  check is_obj response
  
  server_request server request response
 end
 
 //http

 let port 80
 let ip ip_v4
 let on_request on on_request
 let server2 http.createServer on_request
 let s1 concat "port=" port
 let s2 concat "ip=" ip

 log "listen" s1 s2
  
 server2.listen port ip
 
 //https
 
 let port 443
 let SNICallback on SNICallback
 let option obj SNICallback
 let server2 https.createServer option on_request
 let s1 concat "port=" port
 let s2 concat "ip=" ip

 log "listen" s1 s2
  
 server2.listen port ip
 
 //server

 let ons fn_select "on_"
 let queries arr
 
 assign server obj ons queries
 
 ret server
end
