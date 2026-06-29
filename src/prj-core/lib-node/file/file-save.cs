fn file_save path:str data:str
 //same content

 if is_file path
  let s file_load path

  if same s data
   ret
 end

 //create directory tree

 let dir path_dir path

 if not is_dir dir
  dir_make dir

 //write

 file_write path data
end
