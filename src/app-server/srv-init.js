function srv_init()
{
 const r=obj()
 
 r.byte=0
 
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
   
   const s=srv_home(r)
   
   r.byte=add(r.byte,s.length)
   
   y.end(s)
  }  
  else if(same(url,"/data"))  
  {
   y.setHeader("content-type","application/json")
   
   const s=to_json(data)

   r.byte=add(r.byte,s.length)
   
   y.end(s)
  }
 }

 const ips=ip_list()
 const ip=front(ips)
 const srv=http.createServer(on_request)
 
 log("listen",ip)

 srv.listen(80,ip)
 
 return r
}
