fn on x
 check is_fn x
 
 let fn x
 
 fn on_fn x:etc
  if caught
   ret
   
  try
   ret fn x:etc
  catch e
   assign caught true
   
   throw e
  end
 end
 
 if caught
  stop
 
 ret on_fn
end
