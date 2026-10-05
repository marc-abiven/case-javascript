fn dom_prepend node:obj children:arr
 let a dup children

 reverse a

 for a
  dom_unshift node v
 end
end
