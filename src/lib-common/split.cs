fn split x y
 check is_str x
 
 if is_undef y
  ret split x "\n"
 
 if is_empty x
  ret arr
  
 ret x.split y
end
