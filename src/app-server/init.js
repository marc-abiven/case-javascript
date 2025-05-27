function init(...x)
{
 const parameters=dup(x)
 
 if(!extract(parameters,"--sudo"))
 {
  const a=dup(process.argv)
  
  unshift(a,"sudo")
  push(a,"--sudo")

  log("restart","sudo")
    
  os_system(...a)
  
  return
 }
 
 let port=80
 let random=false 

 if(extract(parameters,"--random"))
  random=true

 const a=dup(parameters)
 
 clear(parameters)
  
 while(is_full(a))
 {
  const s=shift(a)
  
  if(same(s,"--port"))
  {
   let n=shift(a)
   
   n=to_uint(n)
   port=n
   
   append(parameters,a)
   
   break
  }
 }
  
 if(is_full(parameters))
 {
  log(parameters)
  log("unsupported",to_lit("parameters"))
  
  return
 }
 
 if(!random)
 {
  const user=os_user()

  os_shell("sudo","usermod","-aG","gpio",user)
  os_shell("sudo","chown","root.gpio","/dev/gpiochip0")
  os_shell("sudo","chmod","660","/dev/gpiochip0")
  os_shell("sudo","chown","root.gpio","/dev/gpiochip1")
  os_shell("sudo","chmod","660","/dev/gpiochip1")
 }
 
 const srv=srv_init(port)
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
 
 function restart_load()
 {
  time_timeout(on_load,0.1)
 }

 function restart_stat()
 {
  time_timeout(on_stat,2)
 }

 function on_load()
 {
  let a=null

  if(random)
   a=csv_random(csv)
  else
   a=csv_load(csv)
   
  if(is_full(a))
   srv.frame=inc(srv.frame)

  append(srv.chans,a)

  const limit=srv_limit(srv)

  if(gt(srv.chans.length,limit))
  {
   const n=sub(srv.chans.length,limit)
   
   shift(srv.chans,n)
   
   srv.offset=add(srv.offset,n)
  }
  
  restart_load()
 }
 
 function on_stat()
 {
  const sharp=concat("#",srv.frame)  
  
  let bandwidth=endpoint_bandwidth(srv)

  bandwidth=concat(bandwidth,"Kb/s")
  
  let speed=srv_speed(srv)

  speed=concat(speed,"row/s")
  
  log("stat",sharp,bandwidth,speed)
  
  restart_stat()
 }
 
 restart_load()
 restart_stat()
}
