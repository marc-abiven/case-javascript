fn org_group_create_users
 //get humans

 fn get_humans
  let r obj
  let users user_list

  forin users
   if not v.human
    cont

   put r v.name v
  end

  ret r
 end

 //main

 var groups group_list
 let group "users"

 if not has groups group
  sudo "groupadd" group

  let o obj group
  let s obj_option o

  log "create" s

  assign groups group_list
 end

 //add all users to group users

 let users groups.users
 let humans get_humans

 forin humans
  if contain users.users k
   cont

  sudo "usermod" "--append" "--groups" users.name k

  let user k
  let o obj user group
  let s obj_option o

  log "add" s
 end
end
