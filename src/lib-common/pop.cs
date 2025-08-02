fn pop x y
 check is_arr x
 
 if is_undef y
  ret pop x 1
 
 check is_uint y

 let n sub x.length y
 
 if same y 1
  let r back x
  
  remove x n 1
  
  ret r
 end
 
 remove x n y
end
