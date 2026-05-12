fn os_run x:str y:etc
 let maxBuffer mul 1 1024 1024 1024
 let encoding "utf8"
 let option obj maxBuffer encoding
 let process cp.spawnSync x y option
 let out to_str process.stdout
 let out trim_r out
 let err to_str process.stderr
 let err trim_r err
 let status process.status

 os_log os_run status x y:etc

 ret obj status out err
end
