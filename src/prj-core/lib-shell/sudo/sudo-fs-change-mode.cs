fn sudo_fs_change_mode path:str mode:str
 if is_file path
  sudo "chmod" mode path
 elseif is_dir path
  sudo "chmod" "--recursive" mode path
 else
  stop
end
