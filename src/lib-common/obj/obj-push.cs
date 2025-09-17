fn obj_push x:obj key:str val:def
 let r obj

 forin x
  if same k key
   cont

  let v get x k

  put r k v
 end

 put r key val

 ret r
end
