function split(x,y)
{
 check(is_str,x)
 
 if(is_undef(y))
  return split(x,"\n")
 
 if(is_empty(x))
  return arr()
  
 return x.split(y)
}
