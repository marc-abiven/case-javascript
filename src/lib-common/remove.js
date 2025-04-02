function remove(x,y,z)
{
 check(is_arr,x)
 check(is_uint,y)

 if(is_undef(z))
  return remove(x,y,1)
 
 check(is_uint,z)
 check(between,y,0,x.length)

 const n=add(y,z)

 check(between,n,0,x.length)

 x.splice(y,z)
}
