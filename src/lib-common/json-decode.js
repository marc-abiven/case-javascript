function json_decode(x)
{
 check(is_str,x)
 
 return JSON.parse(x)
}
