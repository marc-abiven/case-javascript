fn patch_control x:str
 let a arr
 
 for x
  let n asc v
  
  //control character
  
  if lt n 32
   let c cell_encode v
   
   push a c
   
   cont
  end
  
  //any
  
  push a v  
 end
 
 ret implode a
end
