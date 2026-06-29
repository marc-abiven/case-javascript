fn stm_on_run_exit stm:obj event:str status:int args:etc
 check is_main_thread

 let o obj status
 let s obj_option o

 //trace "thread-exit" s
 stm_log3 stm "thread-exit" s

 //detach

 let worker null
 let state obj worker

 stm_state stm state

 //propagate the exit code to the current process

 exit_code status
end
