function join(x,y)
{
 check(is_arr,x)
 
 if(is_undef(y))
  return join(x,"\n")
 
 check(is_str,y)
 
 return x.join(y)
}
