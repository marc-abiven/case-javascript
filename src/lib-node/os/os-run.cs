fn os_run x y:etc
 check is_str x

 let maxBuffer mul 1 1024 1024 1024
 let encoding "utf8"
 let option obj maxBuffer encoding
 let process cp.spawnSync x y option
 let out process.stdout.toString
 let out trim_r out
 let err process.stderr.toString
 let err trim_r err
 let a arr

 if is_full out
  push a out

 if is_full err
  push a err

 let out join a
 let status process.status

 if different status 0
  let s to_lit x

  talk "os-run" s "status" status
 end

 ret obj status out
end