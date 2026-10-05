fn get_type x
 //null

 if is_null x
  ret "null"

 //array

 if is_arr x
  ret "array"

 //any

 ret typeof x
end