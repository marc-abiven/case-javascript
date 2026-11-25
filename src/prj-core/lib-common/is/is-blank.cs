fn is_blank x
 //empty

 if is_empty x
  ret true

 //space

 if is_space x
  ret true

 //any

 ret false
end