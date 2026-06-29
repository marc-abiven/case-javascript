fn is_key x
 //null
 
 if is_null x
  ret true
  
 //boolean

 if is_bool x
  ret true
  
 //number

 if is_num x
  ret true
 
 //alpha-numeric

 if is_alnum x
  ret true
  
 //access

 if is_access x
  ret true
  
 //tuple

 if is_tuple x
  ret true
  
 //numeric

 if is_numeric x
  ret true
  
 //ip

 if is_ip x
  ret true
  
 //literal

 if is_lit x
  ret true
  
 //character literal

 if is_lit_char x
  ret true

 ret false
end
