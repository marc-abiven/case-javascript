fn is_unwrappable x
 //literal

 if is_lit x
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
