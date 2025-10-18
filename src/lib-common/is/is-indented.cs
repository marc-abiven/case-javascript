fn is_indented x
 if not is_str x
  ret false

 if is_empty x
  ret false

 for split x
  if is_empty v
   cont

  let c front v

  if not is_space c
   ret false
 end

 ret true
end
