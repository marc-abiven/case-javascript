fn stm_history stm:obj
 let r copy stm.history

 for r
  assign v.time time_delay v.time
  assign v.duration time_delay v.duration
 end

 ret r
end