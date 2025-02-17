function is_fragment(x)
{
 if(!is_str(x))
  return true

 if(is_alnum(x))
  return true

 if(is_space(x))
  return true
  
 return false
} 
