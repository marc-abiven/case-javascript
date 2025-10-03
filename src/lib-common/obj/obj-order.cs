fn obj_order x:obj keys:etc
 let r obj

 for keys
  let value get x v

  put r v value
 end

 forin x
  let v get x k

  if has r k
   cont

  put r k v
 end

 ret r
end