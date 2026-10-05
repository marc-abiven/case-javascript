fn worker_call worker:obj callable args:etc
 let args clone args

 //string

 if is_str callable
  let message obj callable args

  worker.postMessage message

  ret
 end

 //fn

 if is_fn callable
  ret worker_call worker callable.name args:etc

 //any

 stop
end
