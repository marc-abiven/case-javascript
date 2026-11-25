fn sudo_fs_copy source:str target:str
 //file

 if is_file source
  sudo "cp" source target

  ret
 end

 //directory

 if is_dir source
  sudo "cp" "--recursive" source target

  ret
 end

 //any

 stop
end