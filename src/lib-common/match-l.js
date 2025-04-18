function match_l(x,y)
{
 check(is_str,x)
 check(is_str,y)
 
 if(is_empty(x))
  return false

 if(is_empty(y))
  return false
  
 if(gt(y.length,x.length))
  return false
  
 const s=slice_l(x,y.length)
 
 return same(s,y)
}
