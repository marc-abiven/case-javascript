fn head x y
 check is_vec x
 check is_uint y
 
 if lt x.length y
  if is_str x
   ret x
  elseif is_arr x
   ret dup x
  else
   stop
 end
  
 ret slice_l x y
end
