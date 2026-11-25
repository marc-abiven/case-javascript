gn init x:etc
 let n 20
 let workers arr

 fornum n
  let worker new wt.Worker script

  push workers worker
 end

 for workers
  let promise v.terminate

  run resolve promise
 end

 let time time_now
 let time div time n
 let time time_delay time

 log time
end