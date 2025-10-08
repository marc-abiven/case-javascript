fn is_ushort x
 if not is_uint x
  ret false

 let n mul 256 256

 ret lt x n
end