gn merlin x:etc
 let token app_token "merlin"
 let target "."
 let login_target concat login_merlin ":" target
 let tmp case_javascript_copy
 let dir_data path_fix "data"

 flower "merlin"

 let args arr

 push args "rsync"
 push args "--recursive"
 push args "--perms"
 push args "--delete"
 push args "--compress-level=9"
 push args "--exclude"
 push args dir_data
 push args tmp
 push args login_target

 run ssh_system token args:etc

 let size dir_size "."
 let kb byte_size size

 log "rsync" kb
end
