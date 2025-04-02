function reject(x,y)
{
 check(is_arr,x)
 check(is_fn,y)
 
 const r=arr()
 
 for(const v of x)
 {
  if(y(v))
   continue
   
  push(r,v)
 }
 
 return r
}
