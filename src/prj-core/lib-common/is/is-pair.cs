fn is_pair x
 //vector

 if is_vec x
  ret same x.length 2

 //object

 if is_obj x
  let keys obj_keys x

  ret same keys.length 2
 end

 //any

 ret false
end