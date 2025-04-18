function is_obj(x)
{
 if(is_null(x))
  return false
  
 const s=typeof x
 
 return same(s,"object")
}
