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

 let user to_lit name
 let user concat "user=" user

 log "remove" user
end