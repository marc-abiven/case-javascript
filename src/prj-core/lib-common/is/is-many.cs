fn is_many x
 //vector

 if is_vec x
  ret gt x.length 1

 //object

 if is_obj x
  let a obj_keys x

  ret is_many a
 end

 //any

 ret false
end