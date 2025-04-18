function wp_fold(x)
{
 check(is_arr,x)
 
 function get_children(x,y)
 {
  check(is_arr,x)
  check(is_obj,y)
  
  const r=arr()
  
  for(const v of x)
  {
   if(different(v.parent,y.id))
    continue
    
   const o=dup(v)
   
   o.children=get_children(x,o)
   
   push(r,o)
  }
  
  return r
 }
 
 const r=arr()
 const a=dup(x)
 
 while(is_full(a))
 {
  const o=shift(a)
  
  if(same(o.parent,0))
  {
   o.children=get_children(x,o)
  
   push(r,o)
  }
 }
 
 return r
}
