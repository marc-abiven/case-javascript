function at(x,y,z)
{
 check(is_vec,x)
 check(is_uint,y)

 const n=dec(x.length)

 check(between,y,0,n)
 
 if(is_undef(z))
  return x[y]

 x[y]=z
}
