gn init x:etc
 fn get_domain
  if is_server
   ret "mabynogy.org"
   
  ret "mabynogy.hd.free.fr"
 end
 
 fn is_port_80_busy
  let s os_execute "sudo" "lsof" "-i" ":80"
  
  ret is_full s
 end
 
 let domain get_domain
 let busy is_port_80_busy
 
 if is_port_80_busy 
  os_system "sudo" "systemctl" "stop" "apache2" 
 
 run os_prompt "sudo" "certbot" "certonly" "--standalone" "--email" author "--agree-tos" "--keep-until-expiring" "--domain" domain

 if is_port_80_busy 
  os_system "sudo" "systemctl" "start" "apache2"

 fn on_request x y
  check is_obj x
  check is_obj y

  let url x.url
  let s to_lit url

  log "get" x.socket.remoteAddress url

  assign y.statusCode 200

  if same url "/"
   y.setHeader "content-type" "text/html"

   let s "home"

   y.end s
  elseif same url "/data"
   y.setHeader "content-type" "application/json"
   
   let s data

   y.end s
  end
 end

 let port 80
 let ip ip_v4
 let server https.createServer on_request

 log "listen" ip

 server.listen port ip
end
