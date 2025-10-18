fn dir_find x:str y:str
 let r arr

 for dir_load x
  let base path_base v

  if match base y
   push r v
 end

 ret r
end
