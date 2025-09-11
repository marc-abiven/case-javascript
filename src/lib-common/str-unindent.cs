fn str_unindent x:str
 //~ check is_str x

 var r x

 while is_indented r
  let a arr

  forof split r
   if is_empty v
    push a v

    cont
   end

   let s slice v 1

   push a s
  end

  assign r join a
 end

 ret r
end
