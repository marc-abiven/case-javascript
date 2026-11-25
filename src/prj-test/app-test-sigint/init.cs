gn init x:etc
 //get descendants

 fn get_descendants pid:uint
  let r arr

  for os_children pid
   push r v

   let descendants get_descendants v

   append r descendants
  end

  ret r
 end

 //main

 let begin time_now
 let context os_parallel "./make" "test-all"
 let pause random 8

 log "pause" pause
 run wait pause

 for get_descendants process.pid
  log "kill" v

  try
   process.kill v "SIGINT"
  catch e
   log e.message
  end
 end

 var previous ""

 while not context.closed
  run wait 0.1

  let lines trim_r context.out

  if is_empty lines
   cont

  let lines split lines
  let line back lines

  if same line previous
   cont

  log ">" line

  assign previous line
 end

 //assign context.child null

 //dump context
end
