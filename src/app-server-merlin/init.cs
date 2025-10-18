gn init x:etc
 //start apache

 fn start_apache
  log "apache" "start"

  task_run os_detach "sudo" "systemctl" "start" "apache2"
 end

 //stop apache

 fn stop_apache
  log "apache" "stop"

  sudo "systemctl" "stop" "apache2"
 end

 //on sigint

 fn on_sigint x:str
  if is_local
   start_apache

  deinit_common

  process.exit 2
 end

 //main
 
 log "init"

 let args dup x

 if extract args "--wait"
  log "wait"
  
  run sleep 4
 end

 if is_full args
  let s to_lit "args"

  log "unsupported" s args

  stop
 end

 sigint on_sigint

 if is_local
  stop_apache

 let domains arr

 if is_remote
  push domains "mabynogy.org"
 else
  push domains "mabynogy.hd.free.fr"

 let credentials certbot domains:etc
 let server server_init credentials
 
 while true
  if is_full server.queries
   let query shift server.queries

   task_run server_route server query
  else
   yield

  //restart everyday to launch certbot

  let now time_now

  //if gt now minute
  if gt now day
   let argv node_argv

   let child run os_detach argv:etc script "--wait"
   let s to_str child.pid

   mail author "restart ok" s
   
   brk
  end
 end

 //close

 if is_local
  start_apache
  
 server_close server
end
