function random(x)
{
 check(is_num,x)
 check(gte,x,0)

 let r=Math.random()
 
 r=mul(r,x)
 
 if(is_uint(x))
  return trunc(r)
  
 return r
}
