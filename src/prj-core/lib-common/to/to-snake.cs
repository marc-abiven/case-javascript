fn to_snake x:str
 //is limit

 fn is_limit x
  if not is_str x
   ret false

  if is_upper x
   ret true

  if is_lower x
   ret true

  ret false
 end

 //main

 let a arr

 for delimit x is_limit
  //upper

  if is_upper v
   let s to_lower v

   //single letter

   if is_single s
    if gt i 0
     push a "_"

    push a s

    cont
   end

   //word

   let left dec s.length
   let left slice_l s left
   let right back s

   push a left
   push a "_"
   push a right

   cont
  end

  //any

  push a v
 end

 ret implode a
end
