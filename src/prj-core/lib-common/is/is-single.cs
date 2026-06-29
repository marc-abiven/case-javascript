fn is_single x
 //vector

 if is_vec x
  ret same x.length 1

 //object

 if is_obj x
  let a obj_keys x

  ret is_single a
 end

 //any

 ret false
end