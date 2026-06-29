fn is_name x
 //identifier

 if is_identifier x
  ret true

 //access

 if is_access x
  ret true

 ret false
end