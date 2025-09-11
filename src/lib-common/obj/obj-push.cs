fn obj_push x:obj y:str z:def
 //~ check is_obj x
 //~ check is_str y
 //~ check is_def z

 let r obj

 forin x
  if same k y
   cont

  let v get x k

  put r k v
 end

 put r y z

 ret r
end
