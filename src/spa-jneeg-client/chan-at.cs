fn chan_at x y
 check is_arr x
 check is_uint y
 check lt y dimension
 
 let r arr
 
 forin x
  let i to_i k
  let v at x i
  let n at v y
  
  push r n
 end
 
 ret r
end
