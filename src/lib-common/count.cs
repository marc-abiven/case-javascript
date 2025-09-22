fn count x:arr y:def
 var r 0

 forof x
  if same v y
   assign r inc r
 end

 ret r
end