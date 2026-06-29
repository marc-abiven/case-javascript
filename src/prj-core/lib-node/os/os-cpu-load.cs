fn os_cpu_load
 //times

 let cpus os.cpus

 var time 0
 var idle 0

 forof cpus
  let times v.times

  forin times
   assign time add time v
  end

  assign idle add idle times.idle
 end

 if is_null cpu_time //global
  assign cpu_time obj time idle

  ret 0
 end

 //delta

 let delta_time sub time cpu_time.time
 let delta_idle sub idle cpu_time.idle

 if same delta_time 0
  ret 100

 assign cpu_time.time time
 assign cpu_time.idle idle

 //result

 let r div delta_idle delta_time
 let r sub 1 r
 let r mul r 100
 let r trunc r

 ret r
end
