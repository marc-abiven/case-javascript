gn app_on_run_idle stm:obj event:str args:etc
 if is_full stm.tasks
  run stm_idle stm

 if is_empty stm.tasks
  ret "deinit"
end
