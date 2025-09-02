gn db_open
 let request indexedDB.open "db"
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

 let on_success on on_success
 let on_error on on_error
 
 assign request.onsuccess value on_success
 assign request.onerror value on_error
 
 while not done
  yield
 end

 if error
  throw request.error
  
 ret request.result
end
