gn aft x:etc
 let user "transhumanistes"
 let repo "transhumanistes.github.io"
 let token app_token user
 let url git_url token user repo
 //let tmp path_concat "tmp" repo
 let tmp path_tmp
 let tmp path_concat tmp repo
 let favicon path_concat tmp "favicon.ico"

 flower user
 dir_make tmp

 let html app_home "aft"
 let path path_concat tmp "index.html"

 file_save path html
 fs_copy "src/spa-aft/res/aft-favicon.ico" favicon
 www_copy tmp
 run git_upload tmp user url
end
