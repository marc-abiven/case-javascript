fn prepend x:arr y:arr
 let a dup y

 reverse a

 for a
  unshift x v
 end
end
