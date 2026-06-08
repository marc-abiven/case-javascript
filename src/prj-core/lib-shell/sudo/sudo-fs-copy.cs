fn sudo_fs_copy source:str target:str
 if is_file source
  sudo "cp" source target
 elseif is_dir source
  sudo "cp" "--recursive" source target
 else
  stop
end
