fn is_ip6 x
 if not is_str x
  ret false

 let a split x ":"

 if lt a.length 3
  ret false

 if gt a.length 8
  ret false

 for a
  if is_empty v
   cont

  if not is_alnum v
   ret false

  if contain v "_"
   ret false

  if gt v.length 4
   ret false
 end

 ret true
end
