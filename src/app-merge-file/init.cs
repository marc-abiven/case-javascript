fn init x
 let merge "/home/mabynogy/Documents/merge"
 let archive path_concat merge "archive"
 let out path_concat merge "out"

 fn merge_file x:str
  let content file_load x

  for dir_load out
   let s file_load v

   if same s content
    ret null
  end

  let base path_base x
  let path path_concat out base

  if not is_file path
   file_save path content

   ret path
  end

  let file path_file x
  let ext path_ext x

  var n 0

  while true
   assign n inc n

   let base concat file "-" n "." ext
   let r path_concat out base

   if is_file r
    cont

   file_save r content

   ret r
  end
 end

 dir_reset out

 let a dir_load archive

 for a
  let path merge_file v

  if is_str path
   log path
 end

 log a.length
end