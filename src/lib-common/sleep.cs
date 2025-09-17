gn sleep x:num
 check gte x 0

 let start time_now

 while true
  let elapsed time_now
  let elapsed sub elapsed start

  if gte elapsed x
   brk

  yield
 end
end
