fn stm_log stm:obj args:etc
 let sharp concat "#" stm.frame
 let a arr

 if is_worker
  push a "worker"

 unshift a sharp
 push a meta.app
 append a args

 stm.log a:etc

 //if is_worker
 // debug_file args:etc
end
