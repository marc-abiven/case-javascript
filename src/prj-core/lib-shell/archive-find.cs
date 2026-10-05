fn archive_find path:str version
 if is_def version
  check is_str version

 let dir path_dir path

 if not is_dir dir
  dir_make dir

 let file path_file path
 let ext path_ext path
 let date date_str
 let date replace date "/" "-"

 //base

 var base null

 if is_str version
  assign base concat file "-" date "-" version "." ext
 else
  assign base concat file "-" date "." ext

 //path

 let path path_concat dir base

 if not is_file path
  ret path

 var n 1

 while true
  let digit pad_l n

  //base

  var base null

  if is_str version
   assign base concat file "-" date "-" version "-" digit "." ext
  else
   assign base concat file "-" date "-" digit "." ext

  //path

  let path path_concat dir base

  if is_file path
   assign n inc n

   cont
  end

  ret path
 end
end