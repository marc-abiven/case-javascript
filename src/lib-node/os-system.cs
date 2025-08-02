fn os_system x y:etc
 check is_str x
 
 let stdio "inherit"
 let o obj stdio
 let o cp.spawnSync x y o
 
 ret o.status
end
