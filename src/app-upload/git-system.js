function git_system(x,...y)
{
 const dir=dir_current()

 dir_change(x)
 
 const r=os_system("git",...y)
 
 dir_change(dir)
 
 return r
}
