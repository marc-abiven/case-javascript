fn os_system x:str y:etc
 let stdio "inherit"
 let option obj stdio
 let result cp.spawnSync x y option
 let r result.status

 os_log os_system r x y:etc

 ret r
end
