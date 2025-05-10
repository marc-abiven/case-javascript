function srv_limit(x,y)
{
 check(is_obj,x)
 
 if(is_undef(y))
  return srv_limit(x,limit)
 
 check(is_num,y)
 check(gte,y,0)
 
 let n=srv_speed(x)
 
 n=mul(y,n)
 
 return trunc(n)
}
