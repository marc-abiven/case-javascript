fn os_detach x:str y:etc
 let detached true
 let stdio "ignore"
 let o obj detached stdio
 let r cp.spawn x y o

 r.unref

 ret r
end
