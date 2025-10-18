gn git_upload x:str y:str z:str
 let date date_str
 let time time_str
 let message concat date "-" time

 run git_execute x "config" "--global" "user.name" y
 run git_execute x "config" "--global" "user.email" author
 run git_execute x "config" "--global" "init.defaultBranch" "main"
 run git_execute x "init"
 run git_execute x "add" "."
 run git_execute x "commit" "--message" message "--quiet"
 run git_execute x "push" z "main" "--force"

 let path path_concat x ".git"

 fs_remove path

 let url url_parse z
 let file path_file url.path
 let size dir_size x
 let kb byte_size size

 log "git" file kb
end
