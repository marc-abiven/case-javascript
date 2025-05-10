function endpoint_bandwidth(x)
{
 check(is_obj,x)
 
 let n=time_now()
 
 n=div(x.byte,n)
 n=div(n,1024)
  
 return trunc(n) 
}
