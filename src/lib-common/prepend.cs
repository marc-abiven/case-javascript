fn prepend x:arr y:arr
 let a dup y

 reverse a

 forof a
  unshift x v
 end
end
