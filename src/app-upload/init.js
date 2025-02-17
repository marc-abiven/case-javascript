function init(...x)
{
 if(is_full(x))
 {
  log(x)
  log("unsupported",to_lit("parameters"))
  
  return
 }

 const user="marc-abiven"
 const mail="marc@abiven.eu"
 const repo="case-javascript"
 
 let token=file_read("/home/mabynogy/.github")
 
 token=trim(token)
 token=base36_decode(token) 
 token=salt(token)
 
 const url=concat("https://",token,"@github.com/",user,"/",repo,".git")
 const local="/home/mabynogy/place-hdd/room-coglab/case-javascript"
 const tmp=path_concat("tmp",repo)
 const message=date_get()
 
 fs_remove(tmp)
 dir_make(tmp)
 
 for(const v of dir_read(local,true))
 {
  let path=path_fix(local)
  
  path=strip_l(v,path)
  
  if(match_l(path,"tmp"))
   continue

  if(match_l(path,"out-"))
   continue

  if(match_l(path,"log.txt"))
   continue;
   
  os_system("cp","--recursive",v,tmp)
 }
 
 git_system(tmp,"config","--global","user.name",user)
 git_system(tmp,"config","--global","user.email",mail)
 git_system(tmp,"config","--global","init.defaultBranch","main")
 git_system(tmp,"init")
 git_system(tmp,"add",".")
 git_system(tmp,"commit","--message",message,"--quiet")
 git_system(tmp,"push",url,"main","--force")

 fs_remove("tmp")
}
