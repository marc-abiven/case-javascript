fn random_str x:uint alnum
 if is_undef alnum
  ret random_str x true

 check is_bool alnum

 let a arr
 let range mul 26 256

 while lt a.length x
  let n random range
  let c chr n

  if alnum
   if is_alnum c
    push a c
  else
   push a c
 end

 ret implode a
end