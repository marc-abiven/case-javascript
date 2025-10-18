fn org_user_save x:obj
 let users obj

 forin x
  let v get x k

  if not v.human
   cont

  let mail v.mail
  let created v.created

  check is_def mail
  check is_def created

  let user obj mail created

  put users k user
 end

 let users json_dump users

 sudo_file_save org_user_path users
end
