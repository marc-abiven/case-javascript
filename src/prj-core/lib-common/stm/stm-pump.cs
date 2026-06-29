fn stm_pump stm:obj
 let queue dup stm.queue

 clear stm.queue

 while is_full queue
  //dispatch

  let event shift queue
  
  stm_dispatch stm event

  //limit

  let limit stm.limit

  if gt limit 0
   if gte stm.frame limit
    log "limit-reached" limit

    ret false
   end
  end

  //dead

  if same stm.status "dead"
   stm_log stm "dying"
   
   ret false
  end
 end

 ret true
end
