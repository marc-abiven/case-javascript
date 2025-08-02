fn git_upload x y z
 check is_str x
 check is_str y
 check is_str z
 
 let mail "marc@abiven.eu"
 let message call date_get
 let s1 git_execute x "config" "--global" "user.name" y
 let s2 git_execute x "config" "--global" "user.email" mail
 let s3 git_execute x "config" "--global" "init.defaultBranch" "main"
 let s4 git_execute x "init"
 let s5 git_execute x "add" "."
 let s6 git_execute x "commit" "--message" message "--quiet"
 let s7 git_execute x "push" z "main" "--force"
 let a arr s1 s2 s3 s4 s5 s6 s7
 
 let path path_concat x ".git"
 
 fs_remove path
 
 let url new URL z
 let file path_file url.pathname
 let size dir_size x
 let kb byte_size size
 
 log "git" file kb
 
 ret join a
end
