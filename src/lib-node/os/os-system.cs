fn os_system x y:etc
 check is_str x

 let stdio "inherit"
 let o obj stdio
 let o cp.spawnSync x y o
 let r o.status

 if different r 0
  let s to_lit x

  talk "os-system" s "status" r
 end

 ret r
end