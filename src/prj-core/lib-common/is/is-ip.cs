fn is_ip x
 if is_ip4 x
  ret true

 if is_ip6 x
  ret true

 ret false
end