fn sudo_fs_remove path:str
 if is_file path
  sudo "rm" "--force" path
 elseif is_dir path
  sudo "rm" "--force" "--recursive" path
 else
  stop
end
