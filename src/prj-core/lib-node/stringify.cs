fn stringify x:etc
 let a arr

 for x
  //string

  if is_str v
   push a v

   cont
  end

  //any

  let s to_dump v

  push a s
 end

 ret join a " "
end