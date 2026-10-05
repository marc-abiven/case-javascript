fn app_on_dead_init stm:obj event:str args:etc
 //show exit code

 fn show_exit_code
  let status process.exitCode

  if is_undef status
   stm_log3 stm "terminated"
  elseif same status 0
   stm_log3 stm "terminated"
  elseif is_int status

   let o obj status
   let s obj_option o

   stm_log3 stm "terminated" s
  else
   stop

  verbose_on //show further messages
 end

 //main

 stm_flush stm

 if is_main_thread
  //main thread

  if is_node
   stm_timeout stm 2 //will forced-exit the process
   stm.timeout.unref //don't block the message loop

   show_exit_code
  end
 elseif is_worker
  //worker

  show_exit_code
 else
  stop
end