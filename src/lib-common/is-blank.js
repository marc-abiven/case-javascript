function is_blank(x)
{
 if(!is_str(x))
  return false
   
 if(is_empty(x))
  return true
  
 if(is_space(x))
  return true
  
 return false
}
