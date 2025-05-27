function srv_speed(x)
{
 check(is_obj,x)
 
 const row=add(x.offset,x.chans.length)
  
 let n=time_now()
  
 n=div(row,n)
   
 return trunc(n) 
}
