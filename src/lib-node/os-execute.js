function os_execute(x,...y)
{
 check(is_str,x)

 const shell=true
 const maxBuffer=mul(1,1024,1024,1024)
 const encoding="utf8"
 const o={shell,maxBuffer,encoding}
 const streams=cp.spawnSync(x,y,o)
 
 let out=streams.stdout.toString()
 let err=streams.stderr.toString()
 
 out=trim_r(out)
 err=trim_r(err)
 
 const a=arr()
 
 if(is_full(out))
  push(a,out)
  
 if(is_full(err))
  push(a,err)
 
 return join(a)
}
