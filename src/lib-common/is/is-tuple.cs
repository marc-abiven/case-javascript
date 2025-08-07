fn is_tuple x
 if not is_str x
  ret false

 if is_empty x
  ret false
  
 let a scan x is_member is_word
 
 if is_single a
  ret false  
 
 forin a
  let i to_i k
  let v at a i
  
  if is_member v
   cont
   
  if same v ":"
   let next inc i
   
   if same next a.length
    ret false
    
   cont
  end
   
  ret false
 end
 
 ret true
end
