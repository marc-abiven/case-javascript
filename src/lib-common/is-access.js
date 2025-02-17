function is_access(x)
{
 if(!is_str(x))
  return false

 if(is_empty(x))
  return false
  
 const a=split(x,".")
 
 if(is_single(a))
  return false
 
 return every(a,is_identifier)
}
