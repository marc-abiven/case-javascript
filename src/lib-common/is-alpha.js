function is_alpha(x)
{
 if(!is_str(x))
  return false

 if(is_empty(x))
  return false
  
 const lower="_abcdefghijklmnopqrstuvwxyz"
 const upper=to_upper(lower)

 for(const v of x)
 {
  if(contain(lower,v))
   continue

  if(contain(upper,v))
   continue
   
  return false
 }
 
 return true
}
