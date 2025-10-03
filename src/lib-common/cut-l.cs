fn cut_l x:str y:uint
 if lte x.length y
  ret x

 let length sub y 3
 let s slice_r x length
 let a explode s

 while true
  let c front a

  if is_punct c
   shift a
  elseif is_space c
   shift a
  else
   brk
 end

 let r implode a
 let r concat "..." r

 ret r
end
