fn extract x:arr y:def
 var r false
 let a dup x

 clear x

 for a
  if same v y
   assign r true
  else
   push x v
 end

 ret r
end
