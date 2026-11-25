fn is_label x
 //identifier

 if is_identifier x
  ret true

 //access

 if is_access x
  ret true

 //tuple

 if is_tuple x
  ret true

 //any

 ret false
end