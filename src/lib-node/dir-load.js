function dir_load(x)
{
 check(is_str,x)
 
 const r=arr()
 
 for(const v of dir_read(x))
 {
  if(is_file(v))
   push(r,v)
  else if(is_dir(v))
  {
   const a=dir_load(v)
   
   append(r,a)
  }
  else
   stop()
 }
 
 return r
}
