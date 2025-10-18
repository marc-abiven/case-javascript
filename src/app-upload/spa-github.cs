gn spa_github upload:bool name:str user callback
 if is_undef user
  ret run spa_github upload name name callback

 if is_undef callback
  ret run spa_github upload name user nop
  
 check is_str user
 check is_fn callback
 
 //repo
 
 let repo concat user ".github.io"
 let token app_token user
 let url git_url token user repo
 
 //tmp
 
 let tmp path_tmp
 let tmp path_concat tmp repo
 let tmp_favicon path_concat tmp "favicon.ico"

 flower user
 dir_make tmp
 
 //html

 let html app_home name
 let path path_concat tmp "index.html"

 file_save path html
 
 //favicon and res/

 let res path_concat tmp "res"
 let res_favicon path_concat res "favicon.ico"
 
 let spa concat "spa-" name
 let spa_res path_concat "src" spa "res"
 let spa_favicon path_concat spa_res "favicon.ico"
 
 fs_copy spa_favicon tmp_favicon 
 fs_copy spa_res res
 fs_remove res_favicon
 
 //callback
 
 dir_call tmp callback
 
 //apache
 
 apache
 
 //copy to www
 
 let base path_base tmp
 let base_target path_concat www base

 if is_dir base_target
  sudo_dir_reset base_target

 sudo "cp" "--recursive" tmp www
 sudo "chmod" "--recursive" "777" www
 
 //git
 
 if upload
  run git_upload tmp user url
end
