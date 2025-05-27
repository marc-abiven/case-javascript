function to_uint(x)
{
 check(is_str,x)
 
 const r=to_int(x)
 
 check(is_uint,r)
 
 return r
}
