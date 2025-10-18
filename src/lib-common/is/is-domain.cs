fn is_domain x
 if not is_str x
  ret false

 if not is_user x
  ret false

 let a split x "."

 if is_single a
  ret false

 //tld

 let tld pop a

 if not is_alnum tld
  ret false

 //names

 for a
  if is_alnum v
  elseif is_lisp v
  else
   ret false
 end

 ret true
end