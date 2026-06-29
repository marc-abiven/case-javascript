fn cut_r x:str y:uint
 check is_str x
 check is_uint y

 if lte x.length y
  ret x

 let ellipsis "..."
 let length sub y ellipsis.length
 let s slice_l x length
 let a explode s

 while true
  let c back a

  if is_punct c
   drop a
  elseif is_space c
   drop a
  else
   brk
 end

 let r implode a
 let r concat r ellipsis

 ret r
end
