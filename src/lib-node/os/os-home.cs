fn os_home
 if is_root
  let name os_execute "logname"

  ret path_concat "/home" name
 end

 ret os.homedir
end