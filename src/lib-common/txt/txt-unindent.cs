fn txt_unindent x
 if is_str x
  let a split x
  let a txt_unindent a

  ret join a
 end

 check is_arr x

 var s join x

 while is_indented s
  let a arr

  for split s
   if is_empty v
    push a v

    cont
   end

   let s slice v 1

   push a s
  end

  assign s join a
 end

 ret split s
end
