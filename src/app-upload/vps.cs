gn vps x:etc
 let token app_token "vps"
 let target "."
 let login_target concat login_vps ":" target
 let tmp case_javascript_copy

 flower "vps"

 run ssh_system token "rsync" "--recursive" "--perms" "--delete" "--compress-level=9" tmp login_target

 let size dir_size "."
 let kb byte_size size

 log "rsync" kb
end
