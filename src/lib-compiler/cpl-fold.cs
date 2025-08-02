fn cpl_fold x y
 check is_obj x
 check is_arr y
 
 fn visit x
  check is_arr x
  
  let parent shift x
  let indent parent.indent
  let descendants arr
  
  while is_full x
   let o front x
   
   if gt o.indent indent
    shift x
    push descendants o
   else
    brk
  end

  let children arr
  
  while is_full descendants
   let o visit descendants
   
   push children o
  end
  
  let operator parent.operator
  let parameters parent.parameters
  
  ret obj operator parameters children
 end

 let r arr
 let lines dup y
 
 while is_full lines
  let o visit lines
  
  push r o
 end
 
 ret r
end
