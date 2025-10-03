gn aft upload:bool x:etc
 fn site_unzip
  let zip "site.zip"

  os_execute "unzip" zip
  fs_remove zip
 end

 let user "transhumanistes"
 let repo "transhumanistes.github.io"
 let token app_token user
 let url git_url token user repo
 let tmp path_tmp
 let tmp path_concat tmp repo
 let favicon path_concat tmp "favicon.ico"

 flower user
 dir_make tmp

 let html app_home "aft"
 let path path_concat tmp "index.html"

 file_save path html

 let res path_concat tmp "res"
 let res_favicon path_concat res "aft-favicon.ico"

 fs_copy "src/spa-aft/res/aft-favicon.ico" favicon
 fs_copy "src/spa-aft/res" res

 dir_call res site_unzip

 fs_remove res_favicon
 www_copy tmp

 if upload
  run git_upload tmp user url
end
