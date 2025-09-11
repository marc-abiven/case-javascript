fn sudo_save path:str data:str
 //~ check is_str path
 //~ check is_str data

 let base path_base path
 let tmp path_tmp base

 file_save tmp data
 os_system "sudo" "mv" "--force" tmp path
end
