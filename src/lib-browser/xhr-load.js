function* xhr_load(x)
{
 check(is_str,x)
 
 const xhr=new XMLHttpRequest
 
 let result=null 
 let done=false

 function on_load()
 {
  const response=xhr.response   
  
  if(is_json(response))
   result=json_decode(response)
  else
   result=response
   
  done=true
 }

 xhr.onload=on(on_load)  
 xhr.open("get",x)
 xhr.send()
  
 while(true)
 {
  if(done)
   break
    
  yield
 }
 
 return result
}
