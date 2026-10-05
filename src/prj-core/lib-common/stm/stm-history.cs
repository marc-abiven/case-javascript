fn stm_history stm:obj
 let r arr

 for stm.history
  let row obj

  put row "#" v.frame

  assign row.time time_delay v.time
  assign row.delay time_delay v.duration
  assign row.n v.count
  assign row.origin v.origin
  assign row.target v.target
  assign row.status v.status
  assign row.arg v.args

  push r row
 end

 ret r
end