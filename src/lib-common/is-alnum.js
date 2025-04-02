function is_alnum(x)
{
 if(!is_str(x))
  return false
  
 if(is_empty(x))
  return false

 for(const v of x)
 {
  if(is_alpha(v))
   continue
  
  if(is_digit(v))
   continue
  
  return false
 }
 
 return true
}
