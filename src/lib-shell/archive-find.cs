fn archive_find x:str
 let dir path_dir x

 if not is_dir dir
  dir_make dir

 let file path_file x
 let ext path_ext x
 let date date_str
 let date replace date "/" "-"

 let base concat file "-" date "." ext
 let path path_concat dir base

 if not is_file path
  ret path

 var n 1

 while true
  let digit pad_l n
  let base concat file "-" date "-" digit "." ext
  let path path_concat dir base

  if is_file path
   assign n inc n
   
   cont
  end

  ret path
 end
end
