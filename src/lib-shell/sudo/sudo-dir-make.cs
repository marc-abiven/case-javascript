fn sudo_dir_make path:str
 if is_dir path
  ret 
 
 sudo "mkdir" "--parents" path
end
