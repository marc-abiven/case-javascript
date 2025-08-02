fn indent x
 check is_str x
 
 let a arr
 
 forof split x
  let s trim_r v
  
  if is_empty s
   push a s
  else
   let s concat " " s
   
   push a s
  end
 end
 
 ret join a
end
