gn dom_load x:obj
 var done false

 fn on_load x:obj
  assign done true
 end

 let on_load on on_load

 assign x.onload value on_load

 while true
  if done
   brk

  yield
 end
end
