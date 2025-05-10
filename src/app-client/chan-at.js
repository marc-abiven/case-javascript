function chan_at(x,y)
{
 check(is_arr,x)
 check(is_uint,y)
 check(lt,y,dimension)
 
 const r=arr()
 
 for(const k in x)
 {
  const i=to_i(k)
  const v=at(x,i)
  const n=at(v,y)
  
  push(r,n)
 }
 
 return r
} 
