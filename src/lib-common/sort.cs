fn sort x:container y
 if is_arr x
  if is_undef y
   x.sort
  else
   check is_fn y

   x.sort y
  end
 elseif is_obj x
  fn compare x:obj y:obj
   ret cmp x.key y.key
  end

  if is_undef y
   ret sort x compare

  check is_fn y

  let r obj
  let a arr

  forin x
   let key k
   let value get x k
   let o obj key value

   push a o
  end

  sort a y

  for a
   let k v.key

   put r v.key v.value
  end

  ret r
 end
end
