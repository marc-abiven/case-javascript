fn cpl_is_call x y
 check is_obj x
 check is_str y
 
 if same y "call"
  ret true
 
 forin x.asts
  if same k y
   ret false
 end
 
 ret true
end
