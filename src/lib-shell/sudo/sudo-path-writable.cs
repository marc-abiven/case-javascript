fn sudo_path_writable path:str
 let components path_split path

 while is_full components
  let path path_join components

  //top level directory like /home

  if lte path.length 2
   brk

  //chmod

  if is_file path
   sudo_fs_change_mode path "a+rw"
  elseif is_dir path
   sudo_fs_change_mode path "a+rwx"
  else
   stop

  //next

  drop components
 end
end
