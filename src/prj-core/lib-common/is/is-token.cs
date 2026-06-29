fn is_token x
 //atom
 
 if is_atom x
  ret true
  
 //comment

 if is_comment x
  ret true

 //any
 
 ret false
end
