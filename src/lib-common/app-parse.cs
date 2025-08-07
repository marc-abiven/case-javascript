fn app_parse x y
 check is_str x
 
 if is_undef y
  ret parse x scan
  
 check is_fn y
  
 fn tokenize x y
  check is_str x
  check is_fn y
  
  let r arr

  forof split x
   let indent str_indent v
   let parameters y v
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
 
 fn fold x
  check is_arr x
  
  let r arr
  let lines dup x
  
  while is_full lines
   let o visit lines
   
   push r o
  end
  
  ret r
 end

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
 
 let r tokenize x y
 let r fold r

 ret r
end
