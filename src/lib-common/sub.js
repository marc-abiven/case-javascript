function sub(x,y,...z)
{
 check(is_num,x)
 check(is_num,y)
 
 const r=x-y
 
 if(is_full(z))
  return sub(r,...z)
  
 return r
}
