fn is_vec x
 //string

 if is_str x
  ret true

 //array

 if is_arr x
  ret true

 //any

 ret false
end