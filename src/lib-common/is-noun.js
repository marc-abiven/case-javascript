function is_noun(x)
{
 if(is_identifier(x))
  return true

 if(is_access(x))
  return true
 
 return false
}
