gn marc_abiven upload x:etc
 //case javascript
 
 let user "marc-abiven"
 let token app_token user

 gn case_javascript
  let tmp case_javascript_copy

  for dir_read tmp
   let base path_base v

   if match_l base "out-"
    fs_remove v
  end

  let repo path_base tmp
  let url git_url token user repo

  if upload
   run git_upload tmp user url
 end
 
 //main

 flower user
 run case_javascript
 run spa_github upload "cv" "marc-abiven"
end
