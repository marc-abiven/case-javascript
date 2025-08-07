fn is_member x
 if not is_str x
  ret false
  
 if is_empty x
  ret false
  
 if is_identifier x
  ret true

 if is_lit x
  ret true
  
 ret false
end
