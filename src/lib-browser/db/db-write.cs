gn db_write data:def
 let db run db_open
 var done false
 var error false

 fn on_success x:obj
  assign done true
 end

 fn on_error x:obj
  assign done true
  assign error true
 end

 let transaction db.transaction "data" "readwrite"
 let store transaction.objectStore "data"
 let data to_json data
 let request store.put data "key"

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

 log "db-write"
end
