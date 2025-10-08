fn obj_option x:obj
 let a arr
 
 forin x
  let v get x k
  var value v
  
  if is_key value
   if not is_str value
    assign value to_str value
  else
   if not is_str value
    assign value to_str value
    
   assign value to_lit value
  end
  
  let s concat k "=" value
  
  push a s
 end
 
 ret join a " "
end
