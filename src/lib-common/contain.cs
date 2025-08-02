fn contain x y
 check is_vec x
 
 if is_str x
  check is_str y

 check is_def y
 
 ret x.includes y
end
