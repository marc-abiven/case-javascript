function str_indent(x)
{
 check(is_str,x)
 
 if(is_blank(x))
  return 0
  
 const s=trim_l(x)
 
 return sub(x.length,s.length)
}
 
