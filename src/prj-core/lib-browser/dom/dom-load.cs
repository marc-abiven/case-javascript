gn dom_load node:obj
 //on load

 var done false

 fn on_load event:obj
  assign done true
 end

 //main

 let on_load on on_load

 assign node.onload value on_load

 while true
  if done
   brk

  yield
 end
end
