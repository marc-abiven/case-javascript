fn app_on_dead_timeout stm:obj event:str args:etc
 //main thread

 if is_main_thread
  //node

  if is_node
   //forced exit

   exit_code 3
   debug_leak

   let status process.exitCode
   let o obj status
   let s obj_option o

   stm_log stm "forced-exit" s

   process.exit
  end
 end
end