fn find x y
 check is_arr x
 check is_def y
 
 forin x
  let i to_i k
  let v at x i
  
  if same v y
   ret i
 end
 
 ret -1
end
