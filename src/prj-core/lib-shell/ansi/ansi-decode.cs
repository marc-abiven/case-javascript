fn ansi_decode x:str
 //recognize

 fn recognize x:arr
  let r arr
  let letters dup x
  let letter shift letters

  push r letter

  //escape

  if different letter escape
   ret r

  //open bracket

  while is_full letters
   let letter front letters
   let code asc letter

   //detect final character

   if gte code 64
    if gte code 126
     brk
   end

   push r letter

   //next

   shift letters
  end

  ret r
 end

 //main

 let r arr
 let a explode x

 while is_full a
  let sequence recognize a
  let word implode sequence

  shift a sequence.length
  push r word
 end

 ret r
end
