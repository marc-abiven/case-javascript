gn db_exist
 let promise indexedDB.databases

 for run resolve promise
  if same v.name "db"
   ret true
 end

 ret false
end
