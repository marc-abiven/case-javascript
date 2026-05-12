fn is_vec x
 if is_str x
  ret true

 if is_arr x
  ret true

 ret false
end