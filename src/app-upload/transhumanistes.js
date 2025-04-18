function transhumanistes()
{
 const user="transhumanistes"
 const repo="transhumanistes.github.io"
 const token=get_token(user)    
 const url=concat("https://",token,"@github.com/",user,"/",repo,".git")
 const tmp=path_concat("tmp",repo)
 const favicon=path_concat(tmp,"favicon.ico")

 flower(user)
 dir_make(tmp)
 
 const html=app_home("aft")
 const path=path_concat(tmp,"index.html")
 
 file_save(path,html)
 fs_copy("src/app-aft/res/aft-favicon.ico",favicon)
 git_upload(tmp,user,url)
}
