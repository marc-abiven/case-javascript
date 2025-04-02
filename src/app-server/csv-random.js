function csv_random(x)
{
 check(is_obj,x)
 
 const r=arr()
 const n=random(32)
 
 for(let i=0;i<n;i++)
 {
  const row=arr()
  
  for(let j=0;j<dimension;j++)
  {
   const range=4096
   const half=div(range,2)
   
   let n=random(range)
   
   n=sub(n,half)
   
   push(row,n)
  }
  
  push(r,row)
 }
 
 return r
}
