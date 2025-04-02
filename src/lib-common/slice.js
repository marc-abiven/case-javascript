function slice(x,y,z)
{
 check(is_vec,x)
 
 const n1=inc(x.length)
 
 check(between,y,0,n1)
 
 if(is_undef(z))
 {
  const n=sub(x.length,y)
  
  return slice(x,y,n)  
 }

 check(between,z,0,n1)
 
 const n2=add(y,z)

 check(between,n2,0,n1)
 
 return x.slice(y,n2)
}
