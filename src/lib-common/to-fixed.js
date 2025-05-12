function to_fixed(x,y)
{
 check(is_num,x)

 if(is_undef(y))
  return to_fixed(x,2)
 
 check(is_uint,y)
 
 const s=x.toFixed(y)
 const a=split(s,".")
 
 if(is_single(a))
  return s
 
 const integer=front(a)
 
 let float=back(a)
 
 const digits=explode(float)
 
 while(is_full(digits))
 {
  const c=back(digits)
  
  if(different(c,"0"))
   break
  
  drop(digits)
 }
 
 if(is_empty(digits))
  return integer
  
 float=implode(digits)
 
 return concat(integer,".",float) 
}
