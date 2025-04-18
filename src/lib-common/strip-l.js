function strip_l(x,y)
{
 check(is_str,x)
 check(is_str,y)
 
 if(match_l(x,y))
 {
  const n=sub(x.length,y.length)
  
  return slice_r(x,n)
 }
 
 return x
}
