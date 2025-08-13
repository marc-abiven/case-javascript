fn csv_deinit x
 check is_obj x
 
 forof os_ps
  let command arr
  
  push command v.path
  append command v.args
  
  let command join command " "
  
  if not contain command "csv-save.py"
   cont
   
  let pid v.pid
   
  log "kill" pid
  
  os_execute "sudo" "kill" "-9" pid
 end

 fs_remove x.tmp
end
