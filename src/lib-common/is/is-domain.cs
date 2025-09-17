fn is_domain x
 if not is_str x
  ret false
  
 if not is_user x
  ret false
 
 //tld
 
 let a split x "."
 
 if is_single a
  ret false
  
 let tld back a
 
 if not is_alnum tld
  ret false
  
 ret true
end
