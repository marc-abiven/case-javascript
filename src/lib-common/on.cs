fn on x
 check is_fn x

 let fn value x

 fn on_fn x:etc
  if zombie
   ret

  ret fn x:etc
 end

 if zombie
  stop

 ret value on_fn
end
