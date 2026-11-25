gn upload_merlin x:etc
 let token app_token "merlin"
 let target "."
 let login_target concat login_merlin ":" target
 let tmp case_javascript_copy
 let dir_data path_fix "data"

 run rsync token "--exclude" dir_data tmp login_target

 let size dir_size "."
 let kb byte_size size

 log "rsync" kb
end
