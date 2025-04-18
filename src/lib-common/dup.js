function dup(x)
{
 check(is_container,x)
 
 if(is_arr(x)) 
  return slice(x,0)
 else if(is_obj(x))
 {
  const r=obj()
  
  merge(r,x)
  
  return r
 }
 else
  stop()
}
