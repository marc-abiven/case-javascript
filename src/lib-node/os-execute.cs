fn os_execute x y:etc
 check is_str x

 let maxBuffer mul 1 1024 1024 1024
 let encoding "utf8"
 let o obj maxBuffer encoding
 let streams cp.spawnSync x y o 
 let out call streams.stdout.toString
 let out trim_r out
 let err call streams.stderr.toString 
 let err trim_r err
 let a arr
 
 if is_full out
  push a out
  
 if is_full err
  push a err
 
 ret join a
end
