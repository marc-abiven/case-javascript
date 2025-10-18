gn os_detach x:str y:etc
 //on error

 fn on_error error:obj
  flower "on-error"

  throw error
 end

 //main

 let detached true
 let stdio "ignore"
 let o obj detached stdio
 let r cp.spawn x y o
 let on_error on on_error

 r.on "error" on_error
 r.unref

 //wait a bit in case of an error

 run sleep 0.1

 ret r
end
