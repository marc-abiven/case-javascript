fn org_user_remove x:str
 check different x "mabynogy"

 let users user_list
 let user get users x

 //archive

 let file concat x ".zip"
 let archive path_concat common "archive"

 if not is_dir archive
  sudo_dir_make archive

 let r path_concat archive file
 let r archive_find r

 sudo "zip" "--recurse-paths" "-9" r user.home

 let archive to_lit r

 log "archive" r

 let admin os_user
 let pair concat admin ":" admin

 sudo "chown" pair r

 //remove home

 sudo "deluser" "--remove-home" x

 //update

 org_user_update

 ret r
end