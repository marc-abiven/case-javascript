fn sudo_file_write path:str data:str
 let dir path_dir path

 if not is_dir dir
  sudo_dir_make dir

 let base path_base path
 let tmp path_tmp base  //in a directory where we have the rights

 file_write tmp data
 sudo_fs_rename tmp path
end
