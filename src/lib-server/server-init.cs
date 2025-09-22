fn server_init credentials:obj
 var server null

 fn SNICallback server:str callback:fn
  if not has credentials server
   let error space "Unknown server" server
   let error new Error error

   callback error

   ret
  end

  let credential get credentials server
  let context tls.createSecureContext credential

  callback null context
 end

 fn on_request request:obj response:obj
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