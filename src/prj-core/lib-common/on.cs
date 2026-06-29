fn on fn:fn args:etc
 //on fn

 fn on_fn x:etc
  if is_zombie
   log "zombie" fn.name

   ret
  end

  ret fn args:etc x:etc
 end

 //is zombie

 fn is_zombie
  ret same stm.status "dead"
 end

 //main

 if is_zombie
  stop

 ret value on_fn
end