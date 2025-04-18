function marc_abiven()
{ 
 const user="marc-abiven"
 const token=get_token(user)
 
 function case_javascript()
 { 
  const repo="case-javascript"  
  const url=concat("https://",token,"@github.com/",user,"/",repo,".git")
  //const local="/home/mabynogy/place-hdd/room-coglab/case-javascript"
  const tmp=path_concat("tmp",repo)
  
  dir_make(tmp)
  
  for(const v of dir_read(".",true))
  //for(const v of dir_read(local,true))
  {
   //let path=path_fix(local)
   
   //path=strip_l(v,path)
   
   const base=path_base(v)
   
   if(same(base,"tmp"))
    continue

   if(match_l(base,"out-"))
    continue

   if(same(base,"log.txt"))
    continue;
    
   const target=path_concat(tmp,base)
    
   fs_copy(v,target)
   //fs_copy(v,tmp)
   //os_system("cp","--recursive",v,tmp)
  }
  
  git_upload(tmp,user,url)
 }
 
 function marc_abiven_github_io()
 { 
  const repo="marc-abiven.github.io"  
  const url=concat("https://",token,"@github.com/",user,"/",repo,".git")
  const tmp=path_concat("tmp",repo)
  const cv=path_concat(tmp,"cv")
  const index=path_concat(cv,"index.html")
  const html=app_home("cv")
  
  dir_make(tmp)
  fs_copy("src/app-cv/favicon.ico",tmp)
  fs_copy("src/app-cv/res",cv)
  file_save(index,html)  
  git_upload(tmp,user,url)
 }

 flower(user)  
 case_javascript()
 marc_abiven_github_io()
}
