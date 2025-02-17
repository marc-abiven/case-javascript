function unwrap(x)
{
 check(is_str,x)
 
 if(is_lit(x))
  return json_decode(x)
  
 return x
}
