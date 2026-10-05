fn is_ip4 x
 if not is_str x
  ret false

 let a split x "."

 if different a.length 4
  ret false

 for a
  if not is_digit v
   ret false

  let n to_uint v

  if gt n 255
   ret false
 end

 ret true
end
