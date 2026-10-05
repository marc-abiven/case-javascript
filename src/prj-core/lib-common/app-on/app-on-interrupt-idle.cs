gn app_on_interrupt_idle stm:obj event:str args:etc
 check is_main_thread

 //children

 let children os_children

 if is_empty children
  //deinit

  stm_timeout_kill stm

  ret "deinit"
 end
end