gn init x:etc
 //detach

 gn detach
  let argv node_argv

  log "detach"

  run os_detach argv:etc script "--wait"
 end

 //start apache

 fn start_apache
  log "apache" "start"

  systemctl "start" "apache2"
 end

 //stop apache

 fn stop_apache
  log "apache" "stop"

  systemctl "stop" "apache2"
 end

 //on sigint

 var server null

 fn on_sigint
  if is_something server
   server_close server

  if is_local
   start_apache
 end

 //main

 log "init"

 let args dup x

 //wait

 if extract args "--wait"
  log "wait"

  let s to_str process.pid

  mail author "restart wait" s

  run sleep 4
 end

 //detach

 if extract args "--detach"
  run detach

  ret
 end

 //invalid arguments

 if is_full args
  let s to_lit "args"

  log "unsupported" s args

  stop
 end

 //kill previous instances

 if os_kill "server-merlin"
  run sleep 0.4

 //open port

 os_open_port

 //init

 if is_local
  stop_apache

 sigint on_sigint

 let domains arr

 if is_remote
  push domains "mabynogy.org"
 else
  push domains "mabynogy.hd.free.fr"

 let credentials certbot domains:etc

 assign server server_init credentials

 while true
  if is_full server.queries
   let query shift server.queries

   stm_run app server_dispatch server query
  else
   yield

  //restart everyday to launch certbot

  let now time_now

  //if gt now minute
  if gt now day
   run detach

   brk
  end
 end

 //close

 if is_local
  start_apache

 server_close server
end
