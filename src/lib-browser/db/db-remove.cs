gn db_remove
 let request indexedDB.deleteDatabase "db"
 var done false
 var error false

 fn on_success x
  check is_obj x
  
  assign done true
 end

 fn on_error x
  check is_obj x
  
  assign done true
  assign error true
 end

 fn on_blocked x
  check is_obj x
 
  assign done true
  assign error true
 end
 
 let on_success on on_success
 let on_error on on_error
 let on_blocked on on_blocked
  
 assign request.onsuccess value on_success
 assign request.onerror value on_error
 assign request.onblocked value on_blocked

 while not done
  yield
 end
 
 if error
  throw request.error
  
 log "db-remove"
end
