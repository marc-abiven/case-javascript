fn init x:etc 
 let parameters dup x

 var port 80
 var random false 

 if extract parameters "--random"
  assign random true

 let a dup parameters
 
 clear parameters
  
 while is_full a
  let s shift a
  
  if same s "--port"
   let n shift a   
   let n to_uint n

   assign port n
   append parameters a
   
   brk
  end
 end
  
 if is_full parameters
  log parameters
  
  let s to_lit "parameters"
  
  log "unsupported" s
  
  ret
 end
 
 if not random
  let user os_user

  os_shell "sudo" "usermod" "-aG" "gpio" user
  os_shell "sudo" "chown" "root.gpio" "/dev/gpiochip0"
  os_shell "sudo" "chmod" "660" "/dev/gpiochip0"
  os_shell "sudo" "chown" "root.gpio" "/dev/gpiochip1"
  os_shell "sudo" "chmod" "660" "/dev/gpiochip1"
 end
 
 let srv srv_init port
 let csv csv_init

 fn on_exit
  csv_deinit csv
  
  log "exit"
  
  process.exit 2
 end
 
 let fn on on_exit
 
 process.on "SIGTERM" fn
 process.on "SIGINT" fn
 process.on "SIGUSR1" fn
 process.on "SIGUSR2" fn
 
 fn restart_load
  time_timeout on_load 0.1
 end

 fn restart_stat
  time_timeout on_stat 2
 end

 fn on_load
  var a null

  if random
   assign a csv_random csv
  else
   assign a csv_load csv
   
  if is_full a
   assign srv.frame inc srv.frame

  append srv.chans a

  let limit srv_limit srv

  if gt srv.chans.length limit
   let n sub srv.chans.length limit
   
   shift srv.chans n
   
   assign srv.offset add srv.offset n
  end
  
  restart_load
 end
 
 fn on_stat
  let sharp concat "#" srv.frame  
  let bandwidth endpoint_bandwidth srv
  let bandwidth byte_size bandwidth
  let bandwidth concat bandwidth "/s"  
  let speed srv_speed srv
  let speed concat speed "row/s"
  
  log "stat" sharp bandwidth speed
  
  restart_stat
 end
 
 restart_load
 restart_stat
end
