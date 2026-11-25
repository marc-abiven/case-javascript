fn app_on_deinit_init stm:obj event:str args:etc
 //abort the remaining tasks

 stm_abort stm

 //deinit

 let deinits fn_select "deinit_"
 let deinits reverse deinits //the opposite order of init

 forin deinits
  stm_log3 stm v.name

  v stm
 end

 //some functions aren't available anymore

 assign stm.report partial stm_alt_report stm

 //reset globals

 forin stm.state
  set global k null
 end

 assign stm.state obj

 //main thread

 if is_main_thread
  if is_node
   //tell the worker to stop and wait for it

   worker_finish worker
   stm_timeout stm 3 //give the time to the worker to report an error

   ret
  end
 end

 ret "dead"
end
