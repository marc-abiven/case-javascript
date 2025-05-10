function os_shell(...x)
{
 const result=os_execute(...x)
 
 let command=join(x," ")
 
 command=to_lit(command)
 
 log("shell",command)
 
 for(const v of split(result))
 {
  log(" >",v)
 }
}
