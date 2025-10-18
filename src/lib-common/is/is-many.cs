fn is_many x
 if not is_vec x
  ret false

 ret gt x.length 1
end