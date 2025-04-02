function strip_r(x,y)
{
 check(is_str,x)
 check(is_str,y)
 
 if(match_r(x,y))
 {
  const n=sub(x.length,y.length)
  
  return slice_l(x,n)
 }
 
 return x
}
