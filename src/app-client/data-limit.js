function data_limit(x,y)
{
 check(is_obj,x)
 
 if(is_undef(y))
  return data_limit(x,limit)
 
 check(is_num,y)
 check(gte,y,0)
 
 const n=mul(y,x.speed)
 
 return trunc(n)
}
