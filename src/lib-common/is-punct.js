function is_punct(x)
{
 if(!is_str(x))
  return false
  
 if(is_empty(x))
  return false

 const s="!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
 
 for(const v of x)
 {
  if(!contain(s,v))
   return false
 }
  
 return true
}
