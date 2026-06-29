fn is_printable x
 if not is_str x
  ret false

 if is_empty x
  ret false

 for x
  if is_space v
  elseif is_alnum v
  elseif is_punct v
  else
   ret false
 end

 ret true
end
