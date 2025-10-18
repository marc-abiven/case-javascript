fn password alnum
 if is_undef alnum
  ret password false

 check is_bool alnum

 //make password

 fn make_password
  let a arr

  fornum 10
   let s random_char

   push a s
  end

  ret implode a
 end

 //random char

 let special "_-?"

 fn random_char
  let chars arr

  if alnum
   let a1 explode digit
   let a2 explode lower

   append chars a1
   append chars a2
  else
   let a1 explode special
   let a2 explode digit
   let a3 explode lower
   let a4 explode upper

   append chars a1
   append chars a2
   append chars a3
   append chars a4
  end

  let n random chars.length

  ret at chars n
 end

 //is valid

 fn is_valid x
  if not is_str x
   ret false

  if alnum
   ret is_alnum x

  var special false
  var alpha false
  var digit false
  var upper false
  var lower false

  for x
   if is_special v
    assign special true

   if is_alpha v
    assign alpha true

   if is_digit v
    assign digit true

   if is_upper v
    assign upper true

   if is_lower v
    assign lower true
  end

  if not special
   ret false

  if not alpha
   ret false

  if not digit
   ret false

  if not upper
   ret false

  if not lower
   ret false

  ret true
 end

 //is special

 fn is_special x
  if not is_str x
   ret false

  if is_empty x
   ret false

  for x
   if not contain special v
    ret false
  end

  ret true
 end

 //main

 while true
  let r make_password

  if is_valid r
   ret r
  end
 end
end
