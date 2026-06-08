fn sudo_dir_make path:str
 check not is_dir path

 sudo "mkdir" "--parents" path
 sudo_path_writable path
end