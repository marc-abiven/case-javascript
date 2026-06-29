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

 let input delimit x is_limit
 let output arr

 for input
  //upper

  if is_upper v
   let s to_lower v

   //single letter

   if is_single s
    if gt i 0
     push output "_"

    push output s

    cont
   end

   //word

   let left dec s.length
   let left slice_l s left
   let right back s

   push output left
   push output "_"
   push output right

   cont
  end

  //any

  push output v
 end

 ret implode output
end