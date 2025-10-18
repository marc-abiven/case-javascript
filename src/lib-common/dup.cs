fn dup x:container
 if is_arr x
  ret slice x 0
 elseif is_obj x
  let r obj

  obj_merge r x

  ret r
 else
  stop
end
