//create a timer without the on handler

fn stm_time_timeout stm:obj callback:fn period args:etc
 if is_undef period
  let period div 1 30 //30 fps

  ret stm_time_timeout stm callback period args:etc
 end

 check is_num period

 //don't do the on handler

 let period mul period 1000 //in milliseconds

 ret setTimeout callback period args:etc
end
