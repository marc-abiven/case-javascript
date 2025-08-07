fn at x y z
 check is_vec x
 check is_uint y

 let n dec x.length

 check between y 0 n
 
 if is_undef z
  ret inline "x[y]"

 inline "x[y]=z"
end
