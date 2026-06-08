fn is_alnum x
 if not is_str x
  ret false

 if is_empty x
  ret false

 for x
  //alpha, digit or underscore

  if same v "_"
  elseif is_alpha v
  elseif is_digit v
  else
   ret false
 end

 ret true
end