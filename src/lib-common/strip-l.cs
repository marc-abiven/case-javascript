fn strip_l x y
 check is_str x
 check is_str y
 
 if match_l x y
  let n sub x.length y.length
  
  ret slice_r x n
 end
 
 ret x
end
