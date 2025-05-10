function collate(x)
{
 check(is_arr,x)
 
 function is_delimited(x)
 {
  if(same(x,"_"))
   return false
   
  if(is_punct(x))
   return true
   
  if(is_space(x))
   return true
   
  return false
 }
 
 const a=arr()
 
 for(const v of x)
 {
  if(is_empty(a))
  {
   push(a,v)
   
   continue
  }
  
  const left1=back(a)
  const left2=back(left1)
  const right1=v
  const right2=front(right1)
  
  if(is_delimited(left2))
  {
  }
  else if(is_delimited(right2))
  {
  }
  else
  {
   push(a,right1)
   
   continue
  }

  const s=concat(left1,right1)
  
  drop(a)
  push(a,s)
 }
 
 return join(a," ")
}
