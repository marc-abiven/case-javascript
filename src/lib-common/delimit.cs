fn delimit x:str y
 if is_undef y
  ret delimit x is_fragment

 check is_fn y

 let r arr

 for x
  let right v

  if is_empty r
   push r right

   cont
  end

  let left back r
  let fragment concat left right

  if is_fragment fragment
   drop r
   push r fragment
  else
   push r right
 end

 ret r
end
