fn on fn:fn args:etc
 //on fn
 
 fn on_fn x:etc
  if zombie
   ret

  ret fn args:etc x:etc
 end
 
 //main

 if zombie
  stop

 ret value on_fn
end
