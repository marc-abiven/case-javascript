function replace(x,y,z)
{
 check(is_str,x)
 check(is_str,y)
 check(is_str,z)
 
 const a=split(x,y)
 
 return join(a,z)
}
