function abripourtous()
{
 const user="abripourtous"
 const repo="abripourtous.github.io"
 const token=get_token(user)
 const url=concat("https://",token,"@github.com/",user,"/",repo,".git")
 const tmp=path_concat("tmp",repo)
 const index=path_concat(tmp,"index.html")
 const html=app_home("abripourtous")

 flower(user)
 dir_make(tmp)
 log(token)
 
 fs_copy("src/app-abripourtous/res",tmp)
 file_save(index,html)
 git_upload(tmp,user,url)
}
