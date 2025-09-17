fn org_group_create_users
 //get humans
 
 fn get_humans
  let r obj
  let users user_list
  
  forin users
   let v get users k
   
   if not v.human
    cont
   
   put r v.name v
  end 
  
  ret r
 end
 
 //main
 
 var groups group_list
 let group "users"

 if not has groups "users"
  sudo "groupadd" "users"
  
  let group to_lit group
  let group concat "group=" group
     
  log "create" group
  
  assign groups group_list
 end
 
 //add all users to group users
 
 let users groups.users
 let humans get_humans
 
 forin humans
  if contain users.users k
   cont
   
  sudo "usermod" "--append" "--groups" users.name k

  let user to_lit k
  let user concat "user=" user

  let group to_lit group
  let group concat "group=" group
  
  log "add" user group
 end
end
