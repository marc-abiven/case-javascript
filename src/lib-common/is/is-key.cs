fn is_key x
 if is_bool x
  ret true

 if is_num x
  ret true
  
 if is_alnum x
  ret true

 if is_access x
  ret true

 if is_tuple x
  ret true

 if is_numeric x
  ret true
  
 if is_ip x
  ret true

 if is_lit x
  ret true

 if is_lit_char x
  ret true
 
 ret false
end
