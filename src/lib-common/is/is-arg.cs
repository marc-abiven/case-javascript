fn is_arg x
 if is_identifier x
  ret true

 if is_access x
  ret x

 if is_numeric x
  ret true

 if is_lit x
  ret true

 if is_lit_char x
  ret true

 ret false
end
