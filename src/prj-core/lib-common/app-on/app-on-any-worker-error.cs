gn app_on_any_worker_error stm:obj event:str error:obj args:etc
 check is_main_thread

 verbose_on

 //tag the error

 var error error

 if not has error "thread"
  assign error decycle error
  assign error.thread "worker"
 end

 //error

 //run stm_send stm "error" error
 stm_post stm "error" error
end
