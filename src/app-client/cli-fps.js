function cli_fps(x)
{
 check(is_obj,x)

 let r=time_now()
  
 r=div(x.frame,r)
 r=trunc(r)
 
 return r
}
