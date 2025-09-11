fn obj_unshift x:obj y:str z:def
 //~ check is_obj x
 //~ check is_str y
 //~ check is_def z

 let r obj

 put r y z

 forin x
  if same k y
   cont

  let v get x k

  put r k v
 end

 ret r
end
