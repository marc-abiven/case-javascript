function git_upload(x,y,z)
{
 check(is_str,x)
 check(is_str,y)
 check(is_str,z)
 
 const message=date_get()

 git_system(x,"config","--global","user.name",y)
 git_system(x,"config","--global","user.email",mail)
 git_system(x,"config","--global","init.defaultBranch","main")
 git_system(x,"init")
 git_system(x,"add",".")
 git_system(x,"commit","--message",message,"--quiet")
 git_system(x,"push",z,"main","--force")
}
