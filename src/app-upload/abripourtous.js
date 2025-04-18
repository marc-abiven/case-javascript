function abripourtous()
{
 const user="abripourtous"
 const repo="abripourtous.github.io"
 const token=get_token(user)
 const url=concat("https://",token,"@github.com/",user,"/",repo,".git")
 const tmp=path_concat("tmp",repo)

 flower(user)
 dir_make(tmp)
 log(token)
 
 fs_copy("src/app-abripourtous/res",tmp)
 git_upload(tmp,user,url)
}
