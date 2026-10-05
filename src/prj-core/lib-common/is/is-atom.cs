fn is_atom x
 //alpha-numeric

 if is_alnum x
  ret true

 //access

 if is_access x
  ret true

 //tuple

 if is_tuple x
  ret true

 //lisp

 if is_lisp x
  ret true

 //numeric

 if is_numeric x
  ret true

 //literal

 if is_lit x
  ret true

 //character literal

 if is_lit_char x
  ret true

 //any

 ret false
end
