fn sudo_file_write path:str data:str
 let dir path_dir path
 let base path_base path
 let tmp path_tmp base

 if not is_dir dir
  sudo_dir_make dir

 file_write tmp data
 sudo "mv" "--force" tmp path
end
