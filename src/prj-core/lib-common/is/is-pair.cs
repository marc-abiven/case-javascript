fn is_pair x
 //vector

 if is_vec x
  ret same x.length 2

 //object

 if is_obj x
  let n obj_length x

  ret same n 2
 end

 //any

 ret false
end
