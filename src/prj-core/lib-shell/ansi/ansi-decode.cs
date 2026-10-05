fn ansi_decode x:str
 //recognize
 
 fn recognize x:arr
  let r arr
  let letters dup x
  let first shift letters
  
  push r first
  
  while is_full letters
   let current shift letters
   let sequence arr r:etc current
   let sequence implode sequence
   
   if is_ansi sequence
    brk
    
   push r current
  end
  
  ret r
 end
 
 //is ansi
 
 fn is_ansi x
  let s to_lit x
  console.log s
  
  if not is_str x
   ret false
  
  let s ansi_strip x
  
  ret different s x
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
