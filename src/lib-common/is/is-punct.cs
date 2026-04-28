fn is_punct x
 if not is_str x
  ret false

 if is_empty x
  ret false

 for x
  if not contain punct v
   ret false
 end

 ret true
end
