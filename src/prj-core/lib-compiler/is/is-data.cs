fn is_data x
 //identifier

 if is_identifier x
  ret true

 //access

 if is_access x
  ret true

 //numeric

 if is_numeric x
  ret true

 //literal

 if is_lit x
  ret true
  
 //any

 ret false
end
