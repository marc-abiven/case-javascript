fn get_thread
 //main thread

 if is_main_thread
  ret "main"

 //worker

 if is_worker
  ret "worker"

 //any

 stop
end
