function div(x,y,...z)
{
 check(is_num,x)
 check(is_num,y)
 check(different,y,0)
  
 const r=x/y
 
 if(is_full(z))
  return div(r,...z)
  
 return r
}
