fn sudo_file_save path:str data:str
 let dir path_dir path

 if not is_dir dir
  sudo_dir_make dir

 let base path_base path
 let tmp path_tmp base //a directory where we have the rights

 file_save tmp data
 sudo_fs_rename tmp path
end
