function csv_deinit(x)
{
 check(is_obj,x)
 
 const s=os_execute("ps","aux")
 const a=split(s)
 
 for(const v of a)
 {
  if(!contain(v,"csv-save.py"))
   continue
   
  let a=split(v," ")
  
  a=reject(a,is_empty)
  
  const s=at(a,1)
  const pid=to_uint(s)
  
  log("kill",pid)
  
  os_execute("sudo","kill","-9",pid)
 }
 
 fs_remove(x.tmp)
}
