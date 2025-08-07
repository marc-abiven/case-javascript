fn cpl_dump x
 check is_obj x
 
 fn dump_ast x
  let a arr   
  let parameters x.parameters
  let children x.children  
  let a2 arr
  let a3 arr
  
  push a2 x.operator
  append a2 parameters
  
  forof a2
   if is_token v
    push a3 v
    
    cont
   end
   
   let s to_lit v
   
   push a3 s
  end

  let s space a3:etc

  push a s
    
  forof children
   let s dump_ast v
   
   forof split s
    let s concat " " v
    
    push a s
   end
  end
  
  if is_full children
   push a "end"
   
  ret join a
 end
 
 forin x.stack
  let i to_i k
  let v at x.stack i  
  let n inc i
  let frame concat "#" n
  let title space "frame" frame
 
  flower title
 
  let s dump_ast v
 
  forof split s
   log ">" v
  end
 end
 
 //flower
end
