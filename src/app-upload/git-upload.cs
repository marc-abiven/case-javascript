gn git_upload dir:str user:str url:str
 let date date_str
 let time time_str
 let message concat date "-" time

 run git_execute dir "config" "--global" "user.name" user
 run git_execute dir "config" "--global" "user.email" author
 run git_execute dir "config" "--global" "init.defaultBranch" "main"
 run git_execute dir "init"
 run git_execute dir "add" "."
 run git_execute dir "commit" "--message" message "--quiet"
 run git_execute dir "push" url "main" "--force"

 let path path_concat dir ".git"

 fs_remove path

 let url url_parse url
 let file path_file url.path
 let size dir_size dir
 let kb byte_size size

 log "git" file kb
end
