function is_tuple(x)
{
 if(!is_str(x))
  return false

 if(is_empty(x))
  return false
  
 const a=scan(x,is_member)
 
 if(is_single(a))
  return false  
 
 const s=shift(a)
 
 if(!is_member(s))
  return false  
  
 while(is_full(a))
 {
  let s=shift(a)
  
  if(different(s,":"))
   return false
   
  if(is_empty(a))
   return false

  s=shift(a)

  if(!is_member(s))
   return false
 }
 
 return true
}

