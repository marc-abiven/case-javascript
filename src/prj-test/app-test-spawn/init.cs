gn init x:etc
 //let command arr "node" "out-nop.js"
 let command arr "cmd-nop"
 //let command arr "echo"
 //let command arr "node" "-v"

 //os system

 log "os_system"

 let t time_now

 fornum 10
  os_system command:etc
 end

 let t2 time_now
 let t sub t2 t
 let n div t 10

 dump n

 //os execute

 log "os_execute"

 let t time_now

 fornum 10
  os_execute command:etc
 end

 let t2 time_now
 let t sub t2 t
 let n div t 10

 dump n

 //os capture

 log "os_capture"

 let t time_now

 fornum 10
  run os_capture command:etc
 end

 let t2 time_now
 let t sub t2 t
 let n div t 10

 dump n

 //os prompt

 log "os_prompt"

 let t time_now

 fornum 10
  run os_prompt command:etc
 end

 let t2 time_now
 let t sub t2 t
 let n div t 10

 dump n
end
