function fs_copy(x,y)
{
 check(is_str,x)
 check(is_str,x)

 if(is_file(x))
 {
  if(is_dir(y))
  {
   const base=path_base(x)
   const path=path_concat(y,base)
   
   fs_copy(x,path)
   
   return
  }
 }
 
 const force=true
 const recursive=true
 const o={force,recursive}
 
 fs.cpSync(x,y,o)
}
