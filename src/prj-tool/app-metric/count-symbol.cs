fn count_symbol
 let symbols arr

 for split source_code
  let a split v " "

  for filter a is_label
   //unwrap values

   let names arr

   if is_identifier v
    push names v
   elseif is_access v
    let a unwrap v

    append names a
   elseif is_tuple v
    let a unwrap v

    append names a
   else
    stop

   for names
    if contain symbols v
     cont

    push symbols v
   end
  end
 end

 ret symbols.length
end