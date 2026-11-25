fn tail x:vec y:uint
 if lt x.length y
  //string

  if is_str x
   ret x

  //array

  if is_arr x
   ret dup x

  //any

  stop
 end

 ret slice_r x y
end