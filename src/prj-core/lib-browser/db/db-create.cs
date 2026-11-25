gn db_create
 //on upgrade needed

 let request indexedDB.open "db"
 var done false
 var error false

 fn on_upgrade_needed x:obj
  let db request.result

  if db.objectStoreNames.contains "data"
   ret

  db.createObjectStore "data"
 end

 //on success

 fn on_success x:obj
  assign done true
 end

 //on error

 fn on_error
  assign done true
  assign error true
 end

 //main

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