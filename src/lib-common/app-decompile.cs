fn app_decompile x
 check is_str x
 
 fn filter x
  check is_arr x
  
  let r arr
  let exclude "{[]()=:,"
  
  forof x
   if is_trivia v
    cont
    
   if contain exclude v
    cont
    
   if same v "..."
    cont
    
   push r v
  end

  ret r
 end
 
 fn rewrite_gn x
  check is_arr x

  if not is_many x
   ret x
  
  let s front x
  
  if same s "function"
   let s at x 1
   
   if same s "*"
    let r slice x 2
    
    unshift r "gn"
   
    ret r
   end
  elseif same s "yield"
   let s at x 1
   
   if same s "*"
    let r slice x 2
    
    unshift r "run"
   
    ret r
   end
  elseif gt x.length 4
   let s at x 2
   
   if same s "yield"
    let s at x 3
    
    if same s "*"
     let r dup x
     
     remove r 2 2
     insert r 2 "run"
     
     ret r
    end
   end
  end
  
  ret x
 end
 
 fn rewrite_end x
  check is_arr x

  if is_empty x
   ret x

  if is_many x
   ret x
  
  let r arr
  let s front x
  
  if different s "}"
   ret x
  
  push r "end"
  
  ret r
 end
 
 fn rewrite_keyword x
  check is_arr x
  
  let r arr
  
  forof x
   if same v "function"
    push r "fn"
   elseif same v "const"
    push r "let"
   elseif same v "let"
    push r "var"
   elseif same v "return"
    push r "ret"
   else
    push r v
  end
  
  ret r
 end

 fn rewrite_call x
  if lt x.length 2
   ret x

  if not contain x "?"
   ret x
  
  let s front x
  
  if same s "let"
   let r slice_l x 2
   let s back x
   
   push r s
   
   ret r
  else
   let r slice_l x 1
   let s back x
   
   push r s
   
   ret r 
  end
  
  ret x
 end
 
 fn is_lexem x
  if not is_str x
   ret false
  
  if is_token x
   ret true
   
  if same x "..."
   ret true
  
  ret false
 end
 
 let indent str_indent x
 let indent repeat " " indent
 let a scan x is_lexem
 let a filter a
 let a reject a is_empty
 let a rewrite_gn a
 let a rewrite_end a
 let a rewrite_keyword a
 let a rewrite_call a
 let s join a " "
 
 if is_empty s
  ret s
  
 ret concat indent s
end

