fn dom_prepend x:obj y:arr
 let a dup y

 reverse a

 for a
  dom_unshift x v
 end
end
