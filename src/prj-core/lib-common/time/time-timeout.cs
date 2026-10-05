fn time_timeout callback:fn period args:etc
 if is_undef period
  let period div 1 30 //30 fps

  ret time_timeout callback period args:etc
 end

 check is_num period

 //on timeout

 fn on_timeout x:etc
  //closing

  if is_closing
   //gn_run stm_send app "timer" callback.name args:etc x:etc
   stm_post app "timer" callback.name args:etc x:etc

   ret
  end

  //callback

  ret callback args:etc x:etc
 end

 let period mul period 1000 //in milliseconds

 ret setTimeout on_timeout period
end
