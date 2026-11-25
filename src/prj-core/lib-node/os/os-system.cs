fn os_system x:str y:etc
 let stdio "inherit"
 let option obj stdio
 let child cp.spawnSync x y option

 //error

 if has child "error"
  throw child.error

 //log

 let r child.status

 os_log os_system r "" "" x y:etc

 ret r
end