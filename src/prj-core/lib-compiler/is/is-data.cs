fn is_data x
 if not is_str x
  ret false

 if is_identifier x
  ret true

 if is_access x
  ret true

 if is_numeric x
  ret true

 if is_lit x
  ret true

 ret false
end