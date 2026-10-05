fn is_many x
 //vector

 if is_vec x
  ret gt x.length 1

 //object

 if is_obj x
  let n obj_length x

  ret gt n 1
 end

 //any

 ret false
end
