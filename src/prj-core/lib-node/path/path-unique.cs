//make an unique file name

fn path_unique x:str
 let dir path_dir x
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
