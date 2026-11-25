fn init x:etc
 log "begin"
 log verbose
 log2 "test"

 fornum 10
  log "log" i
  trace "trace" i
 end

 let o obj init

 trace o

 //run wait 2

 log "finish-trace"

 stm_dump app
end