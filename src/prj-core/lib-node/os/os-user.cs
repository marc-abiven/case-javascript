fn os_user
 //root

 if is_root
  let r os_execute "logname"

  check is_alnum r

  ret r
 end

 //any

 let o os.userInfo

 ret o.username
end