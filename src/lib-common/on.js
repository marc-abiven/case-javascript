function on(x)
{ 
 check(is_fn,x)
 
 const fn=x
 
 function on_fn()
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
 
 return on_fn
}
