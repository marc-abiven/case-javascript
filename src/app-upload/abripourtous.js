function abripourtous()
{
 const user="abripourtous"
 const repo="abripourtous.github.io"
 const token=get_token(user)
 const url=concat("https://",token,"@github.com/",user,"/",repo,".git")
 const tmp=path_concat("tmp",repo)
 const index=path_concat(tmp,"index.html")
 const html=app_home("abripourtous")
 const www="/var/www/html"
 const robot="User-agent: *\nDisallow: /"

 flower(user)
 dir_make(tmp)
 
 fs_copy("src/app-abripourtous/res",tmp)
 file_save(index,html)
 
 os_system("sudo","rm","--recursive",www)
 os_system("sudo","mkdir",www)
 os_system("sudo","cp","--recursive",tmp,www)
 os_system("sudo","chmod","--recursive","777",www)
 file_save("/var/www/html/robots.txt",robot)
 
 git_upload(tmp,user,url)
}
