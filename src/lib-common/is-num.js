function is_num(x)
{
 if(Number.isNaN(x))
  return false
  
 const s=typeof x
 
 return same(s,"number")
}
