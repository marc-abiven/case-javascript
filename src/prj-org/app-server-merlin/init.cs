gn init x:etc
 //restart

 gn detach
  let argv node_argv

  log "detach"

  run os_detach argv:etc script "--wait"
 end

 //start apache

 fn start_apache
  log "apache" "start"

  //task_run os_detach "sudo" "systemctl" "start" "apache2"
  stm_run stm os_detach "sudo" "systemctl" "start" "apache2"
 end

 //stop apache

 fn stop_apache
  log "apache" "stop"

  systemctl "stop" "apache2"
 end

 //on sigint

 fn on_sigint x:str
  if is_local
   start_apache

  deinit_common

  exit_code 3
  process.exit
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

 os_kill "server-merlin"

 let on_sigint sigint on_sigint

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

   //task_run server_route server query
   stm_run stm server_route server query
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

 //sigint

 process.removeListener "SIGINT" on_sigint

 //close

 if is_local
  start_apache

 server_close server
end
