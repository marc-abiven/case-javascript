fn extract x:arr y:def
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
