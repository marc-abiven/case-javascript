gn init x:etc
 let args dup x

 fn start_apache
  log "apache" "start"

  os_detach "sudo" "systemctl" "start" "apache2"
 end

 fn stop_apache
  log "apache" "stop"

  os_system "sudo" "systemctl" "stop" "apache2"
 end

 fn on_sigint x:str
  if is_local
   start_apache

  deinit_common

  process.exit 2
 end
 
 fn on_timeout
  process.exit 0
 end

 if extract args "--wait"
  run sleep 4

 if is_full args
  let s to_lit "args"

  log "unsupported" s args

  stop
 end

 sigint on_sigint

 if is_local
  stop_apache

 let credentials certbot
 let server server_init credentials

 while true
  if is_full server.queries
   let query shift server.queries

   gn_run server_route server query
  else
   yield

  let now time_now

  if gt now day
   os_detach binary "--trace-uncaught"  "--trace-deprecation" "--wait"

   let s to_str process.pid

   mail author "restart ok" s

   brk
  end
 end

 if is_local
  start_apache 
  
 time_timeout on_timeout
end
