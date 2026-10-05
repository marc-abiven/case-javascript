gn init x:etc
 let count 5
 let command arr "cmd-nop"

 //os system

 log "os_system"

 let t time_now

 fornum count
  os_system command:etc
 end

 let t2 time_now
 let t sub t2 t
 let n div t count

 dump n

 //os execute

 log "os_execute"

 let t time_now

 fornum count
  os_execute command:etc
 end

 let t2 time_now
 let t sub t2 t
 let n div t count

 dump n

 //os capture

 log "os_capture"

 let t time_now

 fornum count
  run os_capture command:etc
 end

 let t2 time_now
 let t sub t2 t
 let n div t count

 dump n

 //os prompt

 log "os_prompt"

 let t time_now

 fornum count
  run os_prompt command:etc
 end

 let t2 time_now
 let t sub t2 t
 let n div t count

 dump n
end
