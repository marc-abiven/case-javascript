function init(...x)
{
 const parameters=dup(x)
 
 if(!extract(parameters,"--sudo"))
 {
  const a=dup(process.argv)
  
  unshift(a,"sudo")
  push(a,"--sudo")
  
  os_system(...a)
  
  return
 }
 
 let random=false

 if(extract(parameters,"--random"))
  random=true
 
 if(is_full(parameters))
 {
  log(parameters)
  log("unsupported",to_lit("parameters"))
  
  return
 }

 const srv=srv_init() 
 const csv=csv_init()

 function on_exit()
 {
  csv_deinit(csv)
  
  log("exit")
  
  process.exit()
 }
 
 process.on("SIGTERM",on_exit)
 process.on("SIGINT",on_exit)
 process.on("SIGUSR1",on_exit)
 process.on("SIGUSR2",on_exit)
 
 const delay=0.1
 
 let frame=0
 
 const chans=data.chans
 
 function get_bandwidth()
 {
  let n=time_now()
  
  n=div(srv.byte,n)
  n=div(n,1024)
  
  return trunc(n)
 }

 function get_speed()
 {
  const row=add(data.offset,chans.length)
  
  let n=time_now()
  
  n=div(row,n)
  
  return trunc(n)
 }
 
 function on_load()
 {
  frame=inc(frame)  

  let a
  
  if(random)
   a=csv_random(csv)
  else
   a=csv_load(csv)
  
  append(chans,a)
  
  if(gt(chans.length,buffer_limit))
  {
   const n=sub(chans.length,buffer_limit)
   
   shift(chans,n)
   
   data.offset=add(data.offset,n)
  }
 }
 
 function on_stat()
 {
  let speed=get_speed()
  
  speed=concat(speed,"row/s")

  let bandwidth=get_bandwidth()
  
  bandwidth=concat(bandwidth,"Kb/s")
  
  const sharp=concat("#",frame)
  
  log("stat",sharp,chans.length,bandwidth,speed) 
 }
 
 time_interval(on_load,delay)
 time_interval(on_stat,1)
}
