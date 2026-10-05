fn stm_start stm:obj
 //timeout

 fn timeout callback:fn args:etc
  let period div 1 stm.frequency

  stm_time_timeout stm callback period args:etc
 end

 //on tick

 fn on_tick iterator:obj
  let result iterator.next
  let done result.done
  let value result.value

  if done
   //finished

   if is_true value
    //new tick

    let iterator stm_pump stm

    timeout on_tick iterator
   elseif is_false value
    //dead
   else
    stop
  else
   //next step

   check is_undef value

   timeout on_tick iterator
  end
 end

 //main

 stm_post stm "init"

 let iterator stm_pump stm

 timeout on_tick iterator
end