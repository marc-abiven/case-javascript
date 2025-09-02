gn db_create
 let request indexedDB.open "db"
 var done false
 var error false
 
 fn on_upgrade_needed x
  check is_obj x

  let db request.result

  if db.objectStoreNames.contains "data"
   ret
   
  db.createObjectStore "data"
 end

 fn on_success x
  check is_obj x
  
  assign done true
 end

 fn on_error
  assign done true
  assign error true
 end

 let on_upgrade_needed on on_upgrade_needed
 let on_success on on_success
 let on_error on on_error
 
 assign request.onupgradeneeded value on_upgrade_needed
 assign request.onsuccess value on_success
 assign request.onerror value on_error
 
 while not done
  yield
 end

 if error
  throw request.error
  
 log "db-create"
end
