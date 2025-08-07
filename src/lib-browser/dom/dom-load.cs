gn dom_load x
 check is_obj x
 
 var done false
 
 fn on_load x
  check is_obj x
  
  assign done true
 end
 
 assign x.onload on_load
 
 while true
  if done
   brk
    
  yield
 end
end
