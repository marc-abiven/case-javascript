fn is_primitive x
 //scalar

 if is_scalar x
  ret true

 //container

 if is_container x
  ret true
  
 //any

 ret false
end
