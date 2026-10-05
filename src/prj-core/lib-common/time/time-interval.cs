fn time_interval callback:fn period args:etc
 if is_undef period
  let period div 1 30 //30 fps

  ret time_interval callback period args:etc
 end

 check is_num period

 //on interval

 fn on_interval x:etc
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

 ret setInterval on_interval period
end
