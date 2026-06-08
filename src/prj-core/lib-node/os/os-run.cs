fn os_run binary:bool x:str y:etc
 let maxBuffer mul 1 1024 1024 1024 //1Gb
 let encoding "utf8"
 let option obj maxBuffer encoding
 let child cp.spawnSync x y option

 //error

 if has child "error"
  throw child.error

 //out

 var out ""

 if is_null child.stdout
 elseif is_str child.stdout
  assign out to_str child.stdout

  if not binary
   assign out ansi_strip out

  assign out trim_r out
 else
  stop

 //err

 var err ""

 if is_null child.stderr
 elseif is_str child.stderr
  assign err to_str child.stderr

  if not binary
   assign err ansi_strip err

  assign err trim_r err
 else
  stop

 //status

 let status child.status

 //log

 os_log os_run status out err x y:etc

 ret obj status out err
end
