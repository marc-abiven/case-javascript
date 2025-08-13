fn marc_abiven
 let user "marc-abiven"
 let token app_token user
 
 fn case_javascript
  let repo "case-javascript"  
  let url git_url token user repo
  let tmp path_concat "tmp" repo
  
  dir_make tmp
  
  forof dir_read "." true
   let base path_base v
   
   if same base "tmp"
    cont

   if match_l base "out-"
    cont

   if same base "log.txt"
    cont

   if same base "cache.txt"
    cont
    
   let target path_concat tmp base
    
   fs_copy v target
  end
  
  git_upload tmp user url
 end
 
 fn marc_abiven_github_io
  let repo "marc-abiven.github.io"  
  let url git_url token user repo
  let tmp path_concat "tmp" repo
  let cv path_concat tmp "cv"
  let index path_concat cv "index.html"
  let html app_home "cv"
  
  dir_make tmp
  fs_copy "src/spa-cv/favicon.ico" tmp
  fs_copy "src/spa-cv/res" cv
  file_save index html
  www_copy cv
  git_upload tmp user url
 end

 flower user
 case_javascript
 marc_abiven_github_io
end
