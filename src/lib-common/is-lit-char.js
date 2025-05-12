function is_lit_char(x)
{
 if(!is_str(x))
  return false
  
 if(!match_l(x,"'"))
  return false

 if(!match_r(x,"'"))
  return false
  
 let s=strip_l(x,"'")
 
 s=strip_r(s1,"'")

 if(is_empty(s))
  return false

 s=concat("\"",s,"\"")

 return is_lit(s)
} 
