fn collate x
 check is_arr x

 fn is_delimited x
  if same x "_"
   ret false

  if is_punct x
   ret true

  if is_space x
   ret true

  ret false
 end

 let a arr

 forof x
  if is_empty a
   push a v

   cont
  end

  let left back a
  let left back left
  let right front v

  if is_delimited left
  elseif is_delimited right
  else
   push a right

   cont
  end

  let s concat left right

  drop a
  push a s
 end

 ret join a " "
end