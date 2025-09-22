gn db_exist
 let promise indexedDB.databases

 forof run resolve promise
  if same v.name "db"
   ret true
 end

 ret false
end