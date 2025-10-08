fn on x:fn y:etc
 let fn value x
 let args y

 fn on_fn x:etc
  if zombie
   ret

  ret fn args:etc x:etc
 end

 if zombie
  stop

 ret value on_fn
end
