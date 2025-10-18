fn path_tmp x
 if is_undef x
  ret path_tmp "tmp.txt"

 check is_str x

 let dir path_split x

 pop dir

 let dir path_join dir
 let dir path_concat config_tmp dir
 let dir path_strip dir

 if not is_dir dir
  dir_make dir

 let file path_file x
 let ext path_ext x

 while true
  let id random
  let id to_base36 id
  let id head id 7
  var base concat file "-" id

  if is_full ext
   assign base concat base "." ext

  let r path_concat dir base

  if not is_file r
   ret r
 end
end
