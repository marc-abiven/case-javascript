function is_lisp(x)
{
 if(!is_str(x))
  return false
  
 const a=split(x,"-")
 
 return every(a,is_alnum)
}
