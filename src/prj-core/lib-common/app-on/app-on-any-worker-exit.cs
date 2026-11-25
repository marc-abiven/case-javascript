fn app_on_any_worker_exit stm:obj event:str status:int args:etc
 check is_main_thread

 //stop the timeout

 if stm_timeout_has stm
  stm_timeout_kill stm

 //detach

 assign worker null //global

 ret "dead"
end
