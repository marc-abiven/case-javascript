fn sort x y
 check is_container x

 if is_arr x
  if is_undef y
   x.sort
  else
   x.sort y
 elseif is_obj x
  fn compare x y
   check is_obj x
   check is_obj x

   let r cmp x.key y.key

   if same r 0
    let r cmp x.value y.value

    ret r
   end

   ret r
  end

  if is_undef y
   ret sort x compare

  let r obj
  let a arr

  forin x
   let key k
   let value get x k
   let o obj key value

   push a o
  end

  sort a y

  forof a
   let k v.key

   put r v.key v.value
  end

  ret r
 end
end