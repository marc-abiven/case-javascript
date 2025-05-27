function is_member(x)
{
 if(!is_str(x))
  return false
  
 if(is_empty(x))
  return false
  
 if(is_identifier(x))
  return true

 if(is_lit(x))
  return true
  
 return false
}
