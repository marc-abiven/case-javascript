function* wp_load(x)
{
 check(is_str,x)
 
 const result=arr()
 
 let next=true
 let page=1
 
 while(next)
 {
  const xhr=new XMLHttpRequest
  
  let done=false

  function on_load()
  {
   const response=xhr.response   
   const a=json_decode(response)

   append(result,a)
      
   let count=xhr.getResponseHeader("x-wp-totalpages")
   
   count=to_uint(count)
   done=true   
   
   if(same(page,count))
    next=false
  }

  const url=concat(x,"?page=",page,"&per_page=100")
  
  xhr.onload=on(on_load)  
  xhr.open("get",url)
  xhr.send()
  
  while(true)
  {
   if(done)
   {
    page=inc(page)
    
    break
   }
    
   yield
  }
 }
 
 return result
}
