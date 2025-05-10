function os_system(x,...y)
{
 check(is_str,x)
 
 const stdio="inherit"
 const o={stdio}
 const result=cp.spawnSync(x,y,o)
 
 return result.status
}
