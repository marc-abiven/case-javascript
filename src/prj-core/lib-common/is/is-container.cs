fn is_container x
 //array
 
 if is_arr x
  ret true
  
 //object

 if is_obj x
  ret true

 ret false
end
