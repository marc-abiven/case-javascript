function scan(x,y)
{
 check(is_str,x)
 
 if(is_undef(y))
  return scan(x,is_token)
 
 check(is_fn,y)
 
 function delimit(x)
 {
  check(is_str,x)
  
  const r=arr()
  
  for(const v of x)
  {
   const right=v
   
   if(is_empty(r))
   {
    push(r,right)
    
    continue
   }
   
   const left=back(r)
   const fragment=concat(left,right)
   
   if(is_fragment(fragment))
   {
    drop(r)
    push(r,fragment)
   } 
   else
    push(r,right)
  }
  
  return r
 }
 
 function group(x,y)
 {
  check(is_arr,x)
  check(is_fn,y)
  
  const r=arr()
  const fragments=dup(x)
  
  while(is_full(fragments))
  {
   const a=reduce(fragments,y)
   
   if(is_full(a))
   {
    const s=implode(a)
    
    push(r,s)
    shift(fragments,a.length)
   }
   else
   {
    const s=shift(fragments)
    
    push(r,s)
   }
  }
  
  return r
 }
 
 function reduce(x)
 {
  check(is_arr,x)
  check(is_fn,y)
  
  check(is_full,x)
  
  const r=dup(x)
  
  while(is_full(r))
  {
   const s=implode(r)
   
   if(y(s))
    break
   
   drop(r)
  }
  
  return r
 }

 const a=delimit(x)
 
 return group(a,y)
}
