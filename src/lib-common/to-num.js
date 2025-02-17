function to_num(x)
{
 check(is_str,x)
 
 const r=json_decode(x)
 
 check(is_num,r)
 
 return r
}
