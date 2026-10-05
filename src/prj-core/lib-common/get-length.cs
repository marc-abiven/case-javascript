fn get_length x:composite
 //vector

 if is_vec x
  ret x.length

 //object

 if is_obj x
  ret obj_length x

 //any

 stop
end
