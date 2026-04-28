fn is_upper x
 if not is_str x
  ret false

 if is_empty x
  ret false

 for x
  if not contain upper v
   ret false
 end

 ret true
end
