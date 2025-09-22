fn org_user_remove_unused
 let users org_user_load

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

  org_user_remove name

  let user to_lit name
  let user concat "user=" user

  log "remove" user
 end
end