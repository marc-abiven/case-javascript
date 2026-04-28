fn org_user_remove_unused
 let users org_user_load
 let removes obj

 forin users
  let v get users k
  let name v.name
  let last_log v.last_log

  if not v.human
   cont

  //more than seven days old without login

  if not is_null last_log
   cont

  let delay time_get
  let delay sub delay v.created

  if lt delay week
   cont

  //remove

  org_user_remove name

  let o obj user
  let s obj_option o

  log "remove" s

  //mail

  put removes name v.mail
 end

 //mail debug

 if is_full removes
  mail_debug "user-remove-unused" removes
end
