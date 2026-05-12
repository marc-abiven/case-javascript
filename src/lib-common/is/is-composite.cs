fn is_composite x
 //string

 if is_str x
  ret true

 //array

 if is_arr x
  ret true

 //object

 if is_obj x
  ret true

 ret false
end