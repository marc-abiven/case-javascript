fn os_spawn x y:etc
 check is_str x

 let detached true
 let stdio "ignore"
 let o obj detached stdio
 
 ret cp.spawn x y o
end
