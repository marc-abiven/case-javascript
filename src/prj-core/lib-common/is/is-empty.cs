fn is_empty x
 //vector

 if is_vec x
  ret same x.length 0

 //object

 if is_obj x
  let n obj_length x

  ret same n 0
 end

 //any

 ret false
end
