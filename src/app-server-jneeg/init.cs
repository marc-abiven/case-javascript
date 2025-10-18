gn init x:etc
 let args dup x

 var port 80
 var random false

 if extract args "--random"
  assign random true

 let a dup args

 clear args

 while is_full a
  let s shift a

  if same s "--port"
   let n shift a
   let n to_uint n

   assign port n
   append args a

   brk
  end
 end

 if is_full args
  let s to_lit "args"

  log "unsupported" s args

  ret
 end

 if not random
  let user os_user

  run os_prompt "sudo" "usermod" "-aG" "gpio" user
  run os_prompt "sudo" "chown" "root.gpio" "/dev/gpiochip0"
  run os_prompt "sudo" "chmod" "660" "/dev/gpiochip0"
  run os_prompt "sudo" "chown" "root.gpio" "/dev/gpiochip1"
  run os_prompt "sudo" "chmod" "660" "/dev/gpiochip1"
 end

 let srv srv_init port
 let csv run csv_init

 //on sigint

 fn on_sigint x:str
  csv_deinit csv

  deinit_common

  process.exit 2
 end

 sigint on_sigint

 //restart load

 fn restart_load
  time_timeout on_load 0.1
 end

 //restart stat

 fn restart_stat
  time_timeout on_stat 4
 end

 //on load

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

 //on stat

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

 //main

 restart_load
 restart_stat

 run wait
end
