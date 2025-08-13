fn init x y:etc
 check is_str x
 
 forof os_ps
  let pid v.pid
  
  if same pid process.pid
   cont

  if same pid process.ppid
   cont

  let command arr
  
  push command v.path
  append command v.args
  
  let command join command " "
  
  if not contain command x
   cont
   
  let s to_lit v.path
  
  log "kill" pid s
  
  os_system "kill" "-9" pid
 end
end
