fn is_alnum x
 if not is_str x
  ret false

 if is_empty x
  ret false

 for x
  //underscore

  if same v "_"
   cont

  //alpha

  if is_alpha v
   cont

  //digit

  if is_digit v
   cont

  //any

  ret false
 end

 ret true
end