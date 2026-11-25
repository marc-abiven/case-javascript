fn app_on_any_sigint stm:obj event:str context:obj args:etc
 check is_main_thread

 verbose_on

 let app meta.app
 let pid process.pid
 let signal context.signal
 let n context.n
 let o obj app pid signal n
 let s obj_option o

 log "sigint" s

 exit_code 2

 //already in closing

 if is_closing
  ret

 //abort the tasks

 stm_abort stm

 //children

 let children os_children

 if is_full children
  stm_timeout stm 2 //give the time to child_processes to finish

  ret "interrupt"
 end
end