function every(x,y)
{
 check(is_arr,x)
 check(is_fn,y)
 
 for(const v of x)
 {
  if(!y(v))
   return false
 }
 
 return true
}
