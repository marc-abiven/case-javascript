fn srv_init x:uint
 let srv obj

 fn on_request x:obj y:obj
  let url x.url
  let remote x.socket.remoteAddress
  let o obj url remote
  let s obj_option o

  log "get" s

  assign y.statusCode 200

  if same url "/"
   y.setHeader "content-type" "text/html"

   let s app_home "client-jneeg"

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

 let ip ip_v4
 let o http.createServer on_request

 log "listen" ip

 o.listen x ip

 ret srv
end
