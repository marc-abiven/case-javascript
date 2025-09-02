fn dir_find x y
 check is_str x
 check is_str y

 let r arr

 forof dir_load x
  let base path_base v

  if match base y
   push r v
 end

 ret r
end