function is_identifier(x)
{
 if(!is_str(x))
  return false

 if(is_empty(x))
  return false
  
 const s=front(x)
 
 if(!is_alpha(s))
  return false
  
 for(const v of x)
 {
  if(!is_alnum(v))
   return false
 }
 
 return true
}
