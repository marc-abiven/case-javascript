fn is_lower x
 if not is_str x
  ret false

 if is_empty x
  ret false

 for x
  if not contain lower v
   ret false
 end

 ret true
end
