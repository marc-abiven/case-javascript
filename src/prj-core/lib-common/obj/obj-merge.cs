fn obj_merge x:obj y:obj overload
 if is_undef overload
  ret obj_merge x y true

 //overload

 if overload
  Object.assign x y

  ret
 end

 //preserve the existing keys

 forin y
  if not has x k
   put x k v
 end
end