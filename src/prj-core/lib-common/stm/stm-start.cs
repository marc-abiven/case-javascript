fn stm_start stm:obj
 //on tick

 fn on_tick
  if stm_tick stm
   time_timeout on_tick
 end

 //main

 stm_post stm "start"

 time_timeout on_tick
end
