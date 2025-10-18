fn obj_unshift x:obj key:str val:def
 let r obj

 put r key val

 forin x
  if same k key
   cont

  let v get x k

  put r k v
 end

 ret r
end
