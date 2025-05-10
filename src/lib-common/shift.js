function shift(x,y)
{
 check(is_arr,x)
 
 if(is_undef(y))
  return shift(x,1)
 
 check(is_uint,y)
 
 if(same(y,1))
 {
  const r=front(x)
 
  remove(x,0,1)
 
  return r
 }

 remove(x,0,y)
}
