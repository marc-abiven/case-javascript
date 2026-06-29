fn stm_tick stm:obj
 //idle

 if is_empty stm.queue
  stm_post stm "idle"

 //pump

 ret stm_pump stm
end