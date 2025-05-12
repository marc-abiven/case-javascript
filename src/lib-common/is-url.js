function is_url(x)
{
 if(!is_ln(x))
  return false

 if(match_l(x,"http://"))
  return true

 if(match_l(x,"https://"))
  return true
  
 return false
}
