fn org_user_load
 let r user_list

 if is_file org_user_path
  let users cson_load org_user_path

  forin users
   //has been removed

   if not has r k
    cont

   let user get r k

   assign user.mail v.mail
   assign user.created v.created
   assign user.created user_created user
  end
 end

 //normalize

 forin r
  if not has v "mail"
   assign v.mail null
 end

 ret r
end
