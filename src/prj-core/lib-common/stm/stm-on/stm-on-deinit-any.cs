fn stm_on_deinit_any stm:obj event:str args:etc
 //abort

 stm_abort stm

 //deinit

 forin fn_select "deinit_"
  v stm
 end

 //end the worker

 if is_node
  if is_main_thread
   worker_end worker
 end

 //log isn't available anymore

 assign stm.log value stm.console_log

 //leaks

 //debug_leak

 //reset globals

 forin stm.state
  set global k null
 end

 assign stm.state obj

 ret "dead"
end
