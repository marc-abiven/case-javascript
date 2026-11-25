fn cut_l x:str length:uint
 if lte x.length length
  ret x

 let ellipsis "..."
 let length sub length ellipsis.length
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
 let r concat ellipsis r

 ret r
end
