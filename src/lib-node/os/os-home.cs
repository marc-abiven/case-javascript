fn os_home x
 if is_undef x
  let user os_user

  ret os_home user
 end

 check is_str x

 let r path_concat "/home" x

 check is_dir r

 ret r

 //~ if is_undef x
  //~ if is_root
   //~ let name os_execute "logname"

   //~ if contain name " "
    //~ stop

   //~ ret path_concat "/home" name
  //~ end

  //~ ret os.homedir
 //~ end

 //~ check is_str x

 //~ let r path_concat "/home" x

 //~ check is_dir r

 //~ ret r
end