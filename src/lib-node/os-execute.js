function os_execute(x,...y)
{
 check(is_str,x)

 const shell=true
 const maxBuffer=mul(1,1024,1024,1024)
 const encoding="utf8"
 const o={shell,maxBuffer,encoding}
 const streams=cp.spawnSync(x,y,o)
 const out=streams.stdout.toString()
 const err=streams.stderr.toString()
 const s=concat(out,"\n",err)
 
 return trim_r(s)
}
