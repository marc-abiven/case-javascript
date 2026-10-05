//make an unique file name

fn path_unique path:str
 let dir path_dir path
 let file path_file path
 let ext path_ext path

 while true
  //~ let id random
  //~ let id to_base36 id
  //~ let id head id 7
  let id random_str 7 true
  var base concat file "-" id

  if is_full ext
   assign base concat base "." ext

  let r path_concat dir base

  if not is_file r
   ret r
 end
end
