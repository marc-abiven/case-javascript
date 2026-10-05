fn sort x:container y
 //compare obj

 fn compare_obj x:obj y:obj
  ret cmp x.key y.key
 end

 //main

 //array

 if is_arr x
  if is_undef y
   x.sort
  else
   check is_fn y

   x.sort y
  end

  ret
 end

 //object

 if is_obj x
  if is_undef y
   ret sort x compare_obj

  check is_fn y

  let r obj
  let a arr

  forin x
   let key k
   let value value v
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

 //any

 stop
end
