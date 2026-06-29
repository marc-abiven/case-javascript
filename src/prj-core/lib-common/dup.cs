//shallow copy

fn dup x:container
 //array

 if is_arr x
  ret slice x 0

 //object

 if is_obj x
  let r obj

  obj_merge r x

  ret r
 end

 //any

 stop
end