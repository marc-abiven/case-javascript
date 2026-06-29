fn is_arg x
 //identifier
 
 if is_identifier x
  ret true
  
 //access

 if is_access x
  ret x
  
 //numeric

 if is_numeric x
  ret true
  
 //literal

 if is_lit x
  ret true
  
 //character literal

 if is_lit_char x
  ret true

 ret false
end
