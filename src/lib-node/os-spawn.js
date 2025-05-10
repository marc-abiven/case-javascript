function os_spawn(x,...y)
{
 check(is_str,x)

 const detached=true
 const stdio="ignore"
 const o={detached,stdio}
 
 cp.spawn(x,y,o)
}
