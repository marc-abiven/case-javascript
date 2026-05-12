fn random x
 if is_undef x
  ret random Number.MAX_SAFE_INTEGER

 check is_num x
 check gte x 0

 let r Math.random
 let r mul r x

 if is_uint x
  ret trunc r

 ret r
end