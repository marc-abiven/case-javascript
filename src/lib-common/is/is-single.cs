fn is_single x
 if not is_vec x
  ret false

 ret same x.length 1
end