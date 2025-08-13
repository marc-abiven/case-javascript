fn obj_delete x y
 check is_obj x
 check is_str y
 
 let r obj
 
 forin x
  if same k y
   cont
  
  let v get x k
  
  put r k v
 end
 
 ret r
end
