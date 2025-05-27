function csv_load(x)
{
 check(is_obj,x)
 
 const r=arr()
 const paths=arr()
 
 for(const v of dir_read(x.tmp))
 {
  const base=path_base(v)
  
  if(match(base,"data-*.csv"))
   push(paths,v)
 }
 
 if(is_empty(paths))
  return r
  
 pop(paths)
 
 if(is_empty(paths))
  return r
  
 for(const v of paths)
 {
  let content=file_read(v)
  
  fs_remove(v)
  
  content=trim(content)
  
  const lines=split(content)
  
  shift(lines)
  
  for(const v of lines)
  {
   const fields=split(v,",")
   
   shift(fields)
   
   const row=arr()
   
   for(const v of fields)
   {
    let n=to_num(v)
    
    n=div(n,1000)
    
    push(row,n)
   }
   
   check(same,row.length,dimension)
   
   push(r,row)
  }
 }
 
 return r
}
