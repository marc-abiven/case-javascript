fn app_on_interrupt_timeout stm:obj event:str args:etc
 check is_main_thread

 ret "deinit"
end
