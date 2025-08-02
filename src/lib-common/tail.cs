fn tail x y
 check is_arr x
 check is_uint y
 
 if lt x.length y
  ret dup x
  
 ret slice_r x y
end
