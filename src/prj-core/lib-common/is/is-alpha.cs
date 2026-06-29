fn is_alpha x
 if not is_str x
  ret false

 if is_empty x
  ret false

 for x
  if contain lower v
  elseif contain upper v
  else
   ret false
 end

 ret true
end
