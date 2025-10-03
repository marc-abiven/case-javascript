fn at x:vec y:uint z
 let n dec x.length

 check between y 0 n

 if is_undef z
  ret inline "x[y]"

 inline "x[y]=z"
end
