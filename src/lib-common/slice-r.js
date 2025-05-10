function slice_r(x,y)
{
 check(is_vec,x)
 check(is_uint,y)
 
 const n=sub(x.length,y)

 return slice(x,n,y)
}
