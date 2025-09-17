fn init x:etc
 let context argv_context
 let args x
 
 append args context
 
 let args dedup args

 os_detach args:etc
end
