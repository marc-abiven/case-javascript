gn stm_pump stm:obj
 if is_empty stm.queue
  stm_post stm "idle"

 while is_full stm.queue
  let event shift stm.queue

  run stm_dispatch stm event
 end

 ret stm_alive stm
end