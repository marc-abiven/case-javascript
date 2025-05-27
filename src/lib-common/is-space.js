function is_space(x)
{
 if(!is_str(x))
  return false
   
 if(is_empty(x))
  return false
  
 const s=trim(x)
  
 return is_empty(s)
}
