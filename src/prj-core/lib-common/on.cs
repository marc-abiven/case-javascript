fn on callback:fn args:etc
 //on callback

 fn on_callback x:etc
  //dead

  if is_dead
   stm_post app "zombie" callback.name args:etc x:etc
   //gn_run stm_send app "zombie" callback.name args:etc x:etc

   ret
  end

  //callback

  ret callback args:etc x:etc
 end

 //main

 check is_alive //no more event handlers when the process is dead

 ret value on_callback
end
