gn vps
 let token app_token "vps"
 let target "."
 let login_target concat login_vps ":" target

 flower "vps"

 run ssh_system token "ssh" login_vps "rm" "--recursive" "--force" "case-javascript"
 run ssh_system token "rsync" "--recursive" "--perms" "../case-javascript" login_target

 let size dir_size "."
 let kb byte_size size
 
 log "rsync" kb
end
