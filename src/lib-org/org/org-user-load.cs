fn org_user_load
 let r user_list

 if is_file org_user_path
  let users file_load org_user_path
  let users json_decode users

  forin users
   let v get users k

   //has been removed

   if not has r k
    cont

   let user get r k

   assign user.mail v.mail
   assign user.created v.created
   assign user.created user_created user
  end
 end

 forin r
  let v get r k

  if not has v "mail"
   assign v.mail null
 end

 ret r
end