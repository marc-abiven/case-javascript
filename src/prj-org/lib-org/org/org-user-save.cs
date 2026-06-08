fn org_user_save x:obj
 let users obj

 forin x
  let v get x k

  //only humans

  if not v.human
   cont

  let mail v.mail
  let created v.created

  check is_def mail
  check is_def created

  let user obj mail created

  put users k user
 end

 let users cson_encode users

 sudo_file_save org_user_path users
end
