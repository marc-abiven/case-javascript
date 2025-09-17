fn dom_prepend x:obj y:arr
 let a dup y

 reverse a

 forof a
  dom_unshift x v
 end
end
