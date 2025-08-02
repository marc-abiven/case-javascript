fn cpl_parse x y
 check is_obj x
 check is_str y
 
 let r arr

 forof split y
  let indent str_indent v
  let parameters cpl_scan x v
  let parameters reject parameters is_trivia
  
  if is_empty parameters
   cont
   
  let operator shift parameters
  
  if same operator "end"
   if is_empty parameters
    cont
  end
  
  let children arr
  let node obj indent operator parameters children
  
  push r node
 end
 
 ret r
end
