fn is_ip x
 //ipv4

 if is_ip4 x
  ret true

 //ipv6

 if is_ip6 x
  ret true

 //any

 ret false
end