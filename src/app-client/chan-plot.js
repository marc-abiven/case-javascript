function chan_plot(x,y,z)
{
 check(is_arr,x)
 check(is_num,y)
 check(is_num,z)
 check(gte,y,0)
 check(gte,z,0)
 
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
 
 if(lt(x.length,buffer_limit))
  scale_x=div(scale_x,buffer_limit)
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
   
  push(r,o)
 }
 
 return r
} 
