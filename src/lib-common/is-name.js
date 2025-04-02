function is_name(x)
{
 if(is_identifier(x))
  return true
  
 if(is_access(x))
  return true

 if(is_tuple(x))
  return true
 
 return false
}
