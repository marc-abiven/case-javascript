fn stm_on_ready_cont stm:obj event:str args:etc
 //log compile

 fn log_compile
  let compile time_hn meta.compile
  let version meta.version

  let sloc meta.sloc

  //javascript sloc

  let js split source //global
  let js js.length

  //log

  let o obj compile version sloc js
  let s obj_option o

  log2 meta.app s
 end

 //main

 log_compile
 
 if is_node
  //node
  
  if is_main_thread
   //main thread
   
   stm_run stm init argv:etc
  else
   //worker

   stm_run stm worker_init
  end
 elseif is_browser
  //browser

  stm_run stm init
 else
  stop
 
 //continue

 stm_post stm "cont"

 ret "run"
end
