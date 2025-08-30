gn abripourtous x:etc
 let user "abripourtous"
 let repo "abripourtous.github.io"
 let token app_token user
 let url git_url token user repo
 //let tmp path_concat "tmp" repo
 let tmp path_tmp
 let tmp path_concat tmp repo
 let index path_concat tmp "index.html"

 flower user

 let html app_home "abripourtous"

 dir_make tmp
 fs_copy "src/spa-abripourtous/res" tmp
 file_save index html
 www_copy tmp
 run git_upload tmp user url
end
