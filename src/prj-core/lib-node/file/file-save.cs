fn file_save path:str data:str
 //no change

 if is_file path
  let size file_size path

  if same size data.length
   let s file_load path

   if same s data
    ret
  end
 end

 //create directory tree

 let dir path_dir path

 if not is_dir dir
  dir_make dir

 //write

 file_write path data
end