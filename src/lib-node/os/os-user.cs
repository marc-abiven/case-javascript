fn os_user
 if is_root
  let r os_execute "logname"

  check is_alnum r

  ret r
 end

 let o os.userInfo

 ret o.username
end