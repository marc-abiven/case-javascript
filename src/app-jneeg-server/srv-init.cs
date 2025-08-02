fn srv_init x
 check is_uint x
 
 let srv obj
 
 fn on_request x y
  check is_obj x
  check is_obj y
  
  let url x.url
  let s to_lit url
  
  log "get" x.socket.remoteAddress url
  
  assign y.statusCode 200
  
  if same url "/"
   y.setHeader "content-type" "text/html"
   
   let s app_home "jneeg-client"
   
   assign srv.byte add srv.byte s.length
   
   y.end s
  elseif same url "/data"
   y.setHeader "content-type" "application/json"

   let speed srv_speed srv
   let offset srv.offset
   let chans srv.chans   
   let o obj speed offset chans
   let s to_json o

   assign srv.byte add srv.byte s.length
   
   y.end s
  end
 end

 assign srv.frame 0
 assign srv.byte 0
 assign srv.offset 0
 assign srv.chans arr

 let ips call ip_list
 let ip front ips
 let o http.createServer on_request
 
 log "listen" ip

 o.listen x ip
 
 ret srv
end
