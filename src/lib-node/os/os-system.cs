fn os_system x:str y:etc
 //~ check is_str x

 let stdio "inherit"
 let o obj stdio
 let o cp.spawnSync x y o
 let r o.status

 os_log os_system r x y:etc

 ret r
end
