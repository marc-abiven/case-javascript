fn worker_post worker:obj callable:fn args:etc
 let callable callable.name
 let args clone args
 let message obj callable args

 worker.postMessage message
end