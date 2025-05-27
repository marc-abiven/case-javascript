function app_make(x)
{
 check(is_str,x)
 
 function get_includes(x)
 {
  check(is_str,x)
  
  const r=arr()
  const app=concat("src/app-",x)
  
  let a=path_concat(app,"include.txt")
  
  a=file_read(a)
  a=trim(a)
  
  for(const v of split(a))
  {
   const s=path_concat("src",v)
   
   push(r,s)
  }

  push(r,app)
    
  return r
 }
 
 const includes=get_includes(x) 
 const files=arr()
 
 for(const v of includes)
 {
  const a=dir_load(v)
  
  for(const v of a)
  {
   const ext=path_ext(v)
   
   if(same(ext,"js"))
    push(files,v)
  }
 }
 
 const lines=arr()
 
 for(const v of files)
 {
  const s=file_read(v)
  
  for(const v of split(s))
  {
   const s=trim_r(v)
   
   if(is_empty(s))
    continue
   
   push(lines,s)
  }
 }
 
 push(lines,"main()")
 
 return join(lines)
}
