gn init x:etc
 log verbose
 log2 "test"

 fornum 10
  trace i
 end

 //run wait 2

 log "finish-trace"

 stm_dump stm
end