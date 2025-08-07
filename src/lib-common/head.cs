fn head x y
 check is_arr x
 check is_uint y
 
 if lt x.length y
  ret dup x
  
 ret slice_l x y
end
