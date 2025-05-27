function salt(x,y)
{
 check(is_str,x)
 
 if(is_undef(y))
  return salt(x,"azertyuiop")
  
 let r=""
 const a1=explode(x)
 const a2=explode(y)
 
 while(is_full(a1))
 {
  if(is_empty(a2))
  {
   const a3=explode(y)
   
   append(a2,a3)
  }
   
  const c1=shift(a1)
  const c2=shift(a2)
  const n1=asc(c1)
  const n2=asc(c2)
  const n=n1^n2
  const c=chr(n)
  
  r=concat(r,c)
 }
 
 return r
}
