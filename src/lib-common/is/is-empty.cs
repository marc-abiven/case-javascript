fn is_empty x
 //vector

 if is_vec x
  ret same x.length 0

 //object

 if is_obj x
  let keys obj_keys x

  ret is_empty keys
 end

 //any

 ret false
end