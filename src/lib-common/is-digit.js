function is_digit(x)
{
 if(!is_str(x))
  return false

 if(is_empty(x))
  return false
  
 const digits="0123456789"

 for(const v of x)
 {
  if(!contain(digits,v))
   return false
 }
 
 return true
}
