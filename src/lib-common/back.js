function back(x,y,z)
{
 check(is_vec,x)
 
 if(is_undef(y))
  return back(x,0)
 
 check(is_uint,y)
 
 let n=sub(x.length,y)
 
 n=dec(n)

 if(is_undef(z))
  return at(x,n) 
  
 at(x,n,z)
}
