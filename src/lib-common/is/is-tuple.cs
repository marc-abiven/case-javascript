fn is_tuple x
 if not is_str x
  ret false

 if is_empty x
  ret false

 let a split x ":"

 if is_single a
  ret false

 for a
  if is_identifier v
   cont

  ret false
 end

 ret true
end
