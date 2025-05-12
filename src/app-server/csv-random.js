function csv_random(x)
{
 check(is_obj,x)
 
 function get_signal(x)
 { 
  check(is_uint,x)
  
  const r=arr()
  const base=random(8192)
  const range=random(4096)
  
  for(let i=0;i<x;i++)
  {
   const half=div(range,2)
    
   let v=random(range)
    
   v=add(v,base)
   v=sub(v,half)
   v=trunc(v)
    
   push(r,v)
  }
  
  return r
 }
 
 const r=arr()
 const length=random(58)
 const signals=arr()
 
 for(let i=0;i<dimension;i++)
 {
  const signal=get_signal(length)
  
  push(signals,signal)
 }
 
 for(let i=0;i<length;i++)
 {
  const row=arr()
  
  for(let j=0;j<dimension;j++)
  {
   const signal=at(signals,j)
   const n=at(signal,i)
   
   push(row,n)
  }
  
  push(r,row) 
 }
 
 return r
}
