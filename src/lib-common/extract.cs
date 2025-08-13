fn extract x y
 check is_arr x
 check is_def y
 
 var r false
 let a dup x
 
 clear x
 
 forof a
  if same v y
   assign r true
  else
   push x v
 end
 
 ret r
end
