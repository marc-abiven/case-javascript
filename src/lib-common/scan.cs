fn scan x y z
 check is_str x
 
 if is_undef y
  ret scan x is_token
 
 check is_fn y

 if is_undef z
  ret scan x y is_fragment

 check is_fn z
 
 fn delimit x
  check is_str x
  
  let r arr
  
  forof x
   let right v
   
   if is_empty r
    push r right
    
    cont
   end
   
   let left back r
   let fragment concat left right
   
   if is_fragment fragment
    drop r
    push r fragment
   else
    push r right
  end
  
  ret r
 end
 
 fn group x y
  check is_arr x
  check is_fn y
  
  let r arr
  let fragments dup x
  
  while is_full fragments
   let a reduce fragments y
   
   if is_full a
    let s implode a
    
    push r s
    shift fragments a.length   
   else
    let s shift fragments
    
    push r s
   end
  end
  
  ret r
 end
 
 fn reduce x
  check is_arr x
  check is_fn y  
  check is_full x
  
  let r dup x
  
  while is_full r
   let s implode r
   
   if y s
    brk
   
   drop r
  end
  
  ret r
 end

 let a delimit x z
 
 ret group a y
end
