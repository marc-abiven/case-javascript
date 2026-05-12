gn init x:etc
 let context node_context
 let args arr x:etc context:etc
 let args dedup args

 run os_detach args:etc
end