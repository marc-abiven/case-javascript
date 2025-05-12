function pop(x,y)
{
 check(is_arr,x)
 
 if(is_undef(y))
  return pop(x,1)
 
 check(is_uint,y)

 const n=sub(x.length,y)
 
 if(same(y,1))
 {
  const r=back(x)
  
  remove(x,n,1)
  
  return r
 }
 
 remove(x,n,y)
}
