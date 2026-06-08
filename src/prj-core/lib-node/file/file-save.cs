fn file_save x:str y:str
 //same content

 if is_file x
  let s file_load x

  if same s y
   ret
 end

 //create directory tree

 let dir path_dir x

 if not is_dir dir
  dir_make dir

 //write

 let content trim_r y

 file_write x content
end
