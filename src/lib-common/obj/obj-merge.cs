fn obj_merge x:obj y:obj overload
 if is_undef overload
  ret obj_merge x y true

 if overload
  Object.assign x y
 else
  let r dup x

  forin y
   let v get y k

   if not has r k
    put r k v
  end
 end
end