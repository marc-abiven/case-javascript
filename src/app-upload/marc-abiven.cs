gn marc_abiven x:etc
 let user "marc-abiven"
 let token app_token user

 gn case_javascript
  let tmp case_javascript_copy

  forof dir_read tmp
   let base path_base v

   if match_l base "out-"
    fs_remove v
  end

  let repo path_base tmp
  let url git_url token user repo

  run git_upload tmp user url
 end

 gn marc_abiven_github_io
  let repo "marc-abiven.github.io"
  let url git_url token user repo
  let tmp path_tmp
  let tmp path_concat tmp repo
  let cv path_concat tmp "cv"
  let index path_concat cv "index.html"
  let html app_home "cv"

  dir_make tmp
  fs_copy "src/spa-cv/favicon.ico" tmp
  fs_copy "src/spa-cv/res" cv
  file_save index html
  www_copy cv
  run git_upload tmp user url
 end

 flower user
 run case_javascript
 run marc_abiven_github_io
end