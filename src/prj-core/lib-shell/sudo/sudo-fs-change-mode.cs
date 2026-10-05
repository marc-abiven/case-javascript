fn sudo_fs_change_mode path:str mode:str
 //file

 if is_file path
  sudo "chmod" mode path

  ret
 end

 //directory

 if is_dir path
  sudo "chmod" "--recursive" mode path

  ret
 end

 //any

 stop
end