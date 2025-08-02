function chan_plot(x,y,z,a)
{
 check(is_arr,x)
 check(is_num,y)
 check(is_num,z)
 check(is_num,a)
 check(gte,y,0)
 check(gte,z,0)
 check(gte,a,0)
 
 function find_scale_y(x)
 {
  check(is_arr,x)
  
  let min=front(x)
  let max=min
  
  for(const v of x)
  {
   if(gt(v,max))
   {
    max=v
    
    break
   }
  }

  for(const v of x)
  {
   if(lt(v,min))
    min=v
   else if(gt(v,max))
    max=v
  }
  
  return {min,max}
 }

 const r=arr()
 
 if(is_empty(x))
  return r
 
 let scale_x=y
 
 if(lt(x.length,a))
  scale_x=div(scale_x,a)
 else
  scale_x=div(scale_x,x.length)

 const scale=find_scale_y(x) 
 
 let scale_y=sub(scale.max,scale.min)
 
 check(gte,scale_y,0)
 
 if(different(scale_y,0))
  scale_y=div(z,scale_y)
 
 const chan=x
 
 for(const k in chan)
 {
  const i=to_i(k)
  const v=at(chan,i)  
  const nx=mul(i,scale_x)
  
  let ny=sub(v,scale.min)
  
  ny=mul(ny,scale_y)
  
  const x=trunc(nx)
  const y=trunc(ny)
  
  const o={x,y}
   
  if(is_empty(r))
  {  
   push(r,o)
   
   continue
  }
  
  const last=back(r)
  
  if(same(o.x,last.x))
  {
   let n=add(o.y,last.y)
   
   n=div(n,2)
   n=trunc(n)
   
   last.y=n
  }
  else
   push(r,o)
 }
 
 return r
} 
