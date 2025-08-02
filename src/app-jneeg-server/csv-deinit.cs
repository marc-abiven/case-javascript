fn csv_deinit x
 check is_obj x
 
 let s os_execute "ps" "aux"
 
 forof split s
  if not contain v "csv-save.py"
   cont
   
  let a split v " "  
  let a reject a is_empty  
  let pid at a 1
  let pid to_uint s
  
  log "kill" pid
  
  os_execute "sudo" "kill" "-9" pid
 end

 fs_remove x.tmp
end
