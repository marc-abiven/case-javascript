fn stm_timeout stm:obj period name
 check not stm_timeout_has stm

 if is_undef period
  ret stm_timeout stm 1 name //in seconds

 check is_num period

 if is_undef name
  ret stm_timeout stm period "timeout"

 check is_str name

 //on timeout

 fn on_timeout
  assign stm.timeout null

  //stm_post stm name
  gn_run stm_send stm name
 end

 //main

 assign stm.timeout stm_time_timeout stm on_timeout period
end
