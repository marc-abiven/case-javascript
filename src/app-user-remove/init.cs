fn init name:str x:etc
 //exists

 let users org_user_load

 if not has users name
  let name to_lit name

  log "User" name "doesn't exist."

  ret
 end

 //remove

 org_user_remove name

 let user name
 let o obj user
 let s obj_option o

 log "remove" s

 //mail debug

 let user get users name
 let mail user.mail
 let data obj name mail

 mail_debug "user-remove" data
end
