fn back x:vec y z
 if is_undef y
  ret back x 0

 check is_uint y
 check lt y x.length

 let n sub x.length y
 let n dec n

 if is_undef z
  ret at x n

 at x n z
end
