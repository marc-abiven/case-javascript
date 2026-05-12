fn is_name x
 if is_identifier x
  ret true

 if is_access x
  ret true

 if is_tuple x
  ret true

 ret false
end