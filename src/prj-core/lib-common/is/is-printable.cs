fn is_printable x
 if not is_str x
  ret false

 if is_empty x
  ret false

 for x
  //space

  if is_space v
   cont

  //alnum

  if is_alnum v
   cont

  //punctuation

  if is_punct v
   cont

  //any

  ret false
 end

 ret true
end