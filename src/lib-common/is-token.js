function is_token(x)
{
 if(is_alnum(x))
  return true

 if(is_access(x))
  return true

 if(is_tuple(x))
  return true

 if(is_numeric(x))
  return true
  
 if(is_lit(x))
  return true

 if(is_lit_char(x))
  return true

 if(is_comment(x))
  return true

 return false
}
