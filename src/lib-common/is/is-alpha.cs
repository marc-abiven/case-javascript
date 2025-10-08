fn is_alpha x
 if not is_str x
  ret false

 if is_empty x
  ret false

 for x
  if is_lower v
  elseif is_upper v
  else
   ret false
 end

 ret true
end
