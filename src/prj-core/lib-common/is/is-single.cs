fn is_single x
 //vector

 if is_vec x
  ret same x.length 1

 //object

 if is_obj x
  let n obj_length x

  ret same n 1
 end

 //any

 ret false
end
