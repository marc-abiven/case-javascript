fn obj_merge x:obj y:obj
 //preserve the existing keys

 forin y
  if not has x k
   put x k v
 end
end
