fn cpl_uncomment x y
 check is_obj x
 check is_str y
 
 let r arr

 forof split y
  let indent str_indent v
  let tokens cpl_scan x v
  
  if is_empty tokens
   push r ""   
   cont
  end
  
  let indent repeat " " indent
  let line join tokens " "
  let line concat indent line
  
  push r line
 end
 
 let r join r
 let r trim_r r
 
 ret r
end
