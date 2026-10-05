fn sudo_fs_remove path:str
 //file

 if is_file path
  sudo "rm" "--force" path

  ret
 end

 //directory

 if is_dir path
  sudo "rm" "--force" "--recursive" path

  ret
 end

 //any

 stop
end