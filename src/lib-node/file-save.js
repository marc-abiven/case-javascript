function file_save(x,y)
{
 check(is_str,x)
 check(is_str,y)
 
 if(is_file(x))
 {
  const s=file_read(x)
  
  if(same(s,y))
   return
 }
 
 const dir=path_dir(x)
 
 if(!is_dir(dir))
  dir_make(dir)
 
 file_write(x,y)
}
