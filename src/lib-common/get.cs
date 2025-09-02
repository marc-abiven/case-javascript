fn get x y z
 check is_obj x
 check is_str y
 
 if has x y
  ret inline "x[y]"
  
 if is_def z
  ret z
 
 stop
end
