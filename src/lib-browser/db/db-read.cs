gn db_read
 //on success

 var done false
 var error false

 fn on_success x:obj
  assign done true
 end

 //on_error

 fn on_error x:obj
  assign done true
  assign error true
 end

 //main

 let db run db_open
 let transaction db.transaction "data" "readonly"
 let store transaction.objectStore "data"
 let request store.get "key"

 let on_success on on_success
 let on_error on on_error

 assign request.onsuccess value on_success
 assign request.onerror value on_error

 while not done
  yield
 end

 db.close

 if error
  throw request.error

 log "db-read"

 let r request.result

 if is_json r
  ret json_decode r
 end

 ret r
end