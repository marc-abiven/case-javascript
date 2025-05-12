function main()
{
 const parameters=arr()
 
 function pump()
 {
  if(is_fn(init))
  {
   init(...parameters)
   profile()
  }
  else if(is_gn(init))
  {
   const generator=init(...parameters)
   
   function on_timer()
   {
    const iterator=generator.next()
    
    if(iterator.done)
    {
     profile()
     
     return
    }
    
    time_timeout(on_timer)
   }

   on_timer()
  }
 }

 function profile()
 {
  const n=time_now()
  
  let s=to_fixed(n)
  
  s=concat(s,"s")

  log("profile",s)
 }

 if(is_node())
 {
  const a=slice(process.argv,2)
  
  append(parameters,a)
  pump()  
 }
 else if(is_browser())
 {
  let skip=false
  
  function on_load()
  {
   if(skip)
    return 
    
   if(same(document.readyState,"complete"))  
   {
    pump()
    
    skip=true
   }
  }
  
  window.onload=on(on_load)
 }
 else
  stop()
}
