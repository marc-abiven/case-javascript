function map(x,y)
{
 check(is_arr,x)
 check(is_fn,y)
 
 const r=arr()
 
 for(const v of x)
 {
  const v2=y(v)
  
  check(is_def,v2)
  
  push(r,v2)
 }
 
 return r
}
