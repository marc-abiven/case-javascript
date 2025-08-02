fn init x
 let special "_-?"
 
 fn is_special x
  if not is_str x
   ret false
   
  if is_empty x
   return false
   
  forof x
   if not contain special v
    ret false
  end
  
  ret true
 end
 
 fn password
  let a arr
    
  fornum 10
   let s call random_char
   
   push a s
  end
  
  ret implode a
 end
 
 fn random_char
  let chars arr
  let a1 split special ""
  let a2 split digit ""
  let a3 split lower ""
  let a4 split upper ""
  
  append chars a1
  append chars a2
  append chars a3
  append chars a4
  
  let n random chars.length
  
  ret at chars n
 end
 
 fn is_valid x
  if not is_str x
   ret false
   
  var special false
  var alpha false
  var digit false
  var upper false
  var lower false
   
  forof x
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
 
 while true
  let s call password
  
  if is_valid s
   log s
   
   ret
  end
 end
end
