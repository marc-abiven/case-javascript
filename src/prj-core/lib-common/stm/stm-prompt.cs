fn stm_prompt stm:obj
 //get status

 fn get_status
  var padding 0

  for stm.ons
   let length v.status.length

   assign padding max padding length
  end

  ret pad_l stm.status " " padding
 end

 //main

 let r obj

 if is_node
  assign r.pid pad_l process.pid " " 7

 assign r.time time_now
 assign r.time to_fixed r.time
 assign r.time concat r.time "s"
 assign r.time pad_l r.time " " 7
 assign r.app pad_l meta.app " " 13
 assign r.index inc stm.frame
 assign r.index pad_l r.index "0" 4
 assign r.index concat "#" r.index
 assign r.status get_status
 assign r.thread get_thread
 assign r.thread pad_l r.thread " " 6

 ret r
end
