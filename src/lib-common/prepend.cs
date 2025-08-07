fn prepend x y
 check is_arr x
 check is_arr y
 
 let a dup y
 
 reverse a
 
 forof a
  unshift x v
 end
end
