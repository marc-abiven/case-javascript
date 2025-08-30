fn file_save x y
 check is_str x
 check is_str y

 if is_file x
  let s file_read x

  if same s y
   ret
 end

 let dir path_dir x

 if not is_dir dir
  dir_make dir

 file_write x y
end