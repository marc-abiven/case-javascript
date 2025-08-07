fn back x y z
 check is_vec x
 
 if is_undef y
  ret back x 0
 
 check is_uint y
 
 let n sub x.length y
 let n dec n

 if is_undef z
  ret at x n
  
 at x n z
end
