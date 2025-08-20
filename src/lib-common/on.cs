fn on x
 check is_fn x

 let fn value x

 fn on_fn x:etc
  if zombie
   ret

  try
   ret fn x:etc
  catch e
   assign zombie true

   throw e
  end
 end

 if zombie
  stop

 ret value on_fn
end