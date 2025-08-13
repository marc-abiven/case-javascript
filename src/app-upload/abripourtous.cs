fn abripourtous
 let user "abripourtous"
 let repo "abripourtous.github.io"
 let token app_token user
 let url git_url token user repo
 let tmp path_concat "tmp" repo
 let index path_concat tmp "index.html"
 let html app_home "abripourtous"

 flower user
 dir_make tmp 
 fs_copy "src/spa-abripourtous/res" tmp
 file_save index html 
 www_copy tmp
 git_upload tmp user url
end
