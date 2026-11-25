fn is_identifier x
 if not is_str x
  ret false

 if is_empty x
  ret false

 let s front x

 if same s "_"
 elseif is_alpha s
 else
  ret false

 for x
  if not is_alnum v
   ret false
 end

 ret true
end
