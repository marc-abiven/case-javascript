function to_int(x)
{
 check(is_str,x)
 
 const r=to_num(x)
 
 check(is_int,r)
 
 return r
}
