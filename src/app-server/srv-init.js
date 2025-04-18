function srv_init(x)
{
 check(is_uint,x)
 
 const srv=obj()
 
 function on_request(x,y)
 {
  check(is_obj,x)
  check(is_obj,y)
  
  const url=x.url
  
  log("get",x.socket.remoteAddress,to_lit(url))
  
  y.statusCode=200
  
  if(same(url,"/"))
  {
   y.setHeader("content-type","text/html")
   
   const s=app_home("client")
   
   srv.byte=add(srv.byte,s.length)
   
   y.end(s)
  }  
  else if(same(url,"/data"))  
  {
   y.setHeader("content-type","application/json")

   const speed=srv_speed(srv)
   const offset=srv.offset
   const chans=srv.chans
   
   const o={speed,offset,chans}   
   const s=to_json(o)

   srv.byte=add(srv.byte,s.length)
   
   y.end(s)
  }
 }

 srv.frame=0
 srv.byte=0
 srv.offset=0
 srv.chans=arr()

 const ips=ip_list()
 const ip=front(ips)
 const o=http.createServer(on_request)
 
 log("listen",ip)

 o.listen(x,ip)
 
 return srv
}
