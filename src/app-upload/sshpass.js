function sshpass(x,...y)
{
 check(is_str,x)
 
 const r=os_execute("sshpass","-p",x,...y)
 const a=split(r)
 
 if(is_full(a))
 { 
  log(...y)
  
  for(const v of a)
  {
   log(" >",v)
  }
 }
 
 return r
}
