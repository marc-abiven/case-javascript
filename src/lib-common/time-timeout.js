function time_timeout(x,y)
{ 
 check(is_fn,x)

 if(is_undef(y))
  return time_timeout(x,0)

 check(is_num,y)
 check(gte,y,0)
 
 const fn=x
 
 function on_timeout()
 {
  if(caught)
   return
   
  try
  {
   return fn()
  }
  catch(e)
  {
   caught=true
   
   throw e
  }
 }
 
 check(!caught)
 
 const n=mul(y,1000)

 setTimeout(on_timeout,n)
}
