function dir_read(x,y)
{
 check(is_str,x)
 
 if(is_undef(y))
  return dir_read(x,false)
 
 const r=arr()
 const dir=path_real(x)
 
 for(const v of fs.readdirSync(dir))
 {
  const s=path_concat(dir,v)
  
  if(is_file(s))
  {
   push(r,s)
   
   continue
  }
   
  if(y)
  {
   if(is_dir(s))
    push(r,s)
  }
 }
 
 return r
}
