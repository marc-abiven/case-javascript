fn server_init credentials:obj
 //snicallback

 var server null

 fn SNICallback server:str callback:fn
  if not has credentials server
   let server to_lit server
   let error space "Unknown server" server
   let error new Error error

   callback error

   ret
  end

  let credential get credentials server
  let context tls.createSecureContext credential

  callback null context
 end

 //on request

 fn on_request request:obj response:obj
  server_request server request response
 end

 //main

 let _servers arr

 //http

 let port 80
 let ip ip_v4
 let on_request on on_request
 let _server http.createServer on_request
 let o obj port ip
 let s obj_option o

 log "listen" s

 _server.listen port ip

 push _servers _server

 //https

 let port 443
 let SNICallback on SNICallback
 let option obj SNICallback
 let _server https.createServer option on_request
 let o obj port ip
 let s obj_option o

 log "listen" s

 _server.listen port ip

 push _servers _server

 //ons

 let ons arr

 forin fn_select "server_on_"
  let on value v
  let parts split k "_"
  let host shift parts

  //home

  if is_empty parts
   let path "/"
   let on obj host path on

   push ons on

   cont
  end

  //any

  if is_single parts
   let path front parts

   if same path "any"
    let on obj host path on

    push ons on

    cont
   end
  end

  //path

  let path join parts "/"
  let path concat "/" path
  let on obj host path on

  push ons on
 end

 //server

 let queries arr

 assign server obj ons queries _servers

 ret server
end