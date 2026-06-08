fn is_noun x
 if is_identifier x
  ret true

 if is_access x
  ret true

 ret false
end