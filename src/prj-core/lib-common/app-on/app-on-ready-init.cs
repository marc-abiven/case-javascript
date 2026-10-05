fn app_on_ready_init stm:obj event:str args:etc
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

 if is_main_thread
  //main thread

  log_compile

  if is_node
   stm_run stm init argv:etc
  elseif is_browser
   stm_run stm init
  else
   stop
 elseif is_worker
  //worker

  stm_run stm worker_init
 else
  stop

 ret "run"
end