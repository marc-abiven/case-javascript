fn obj_remove x:obj key:str
 let r obj

 forin x
  if same k key
   cont

  let v get x k

  put r k v
 end

 ret r
end
