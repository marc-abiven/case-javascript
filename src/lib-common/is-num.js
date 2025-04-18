function is_num(x)
{
 if(Number.isNaN(x))
  return false
  
 if(same(x,Number.NEGATIVE_INFINITY))
  return false

 if(same(x,Number.POSITIVE_INFINITY))
  return false
  
 const s=typeof x
 
 return same(s,"number")
}
