fn path_tmp x
 if is_undef x
  ret path_tmp "tmp.txt"

 check is_str x

 //split path

 let dir path_split x

 pop dir

 let dir path_join dir
 let dir path_concat config_tmp dir
 let dir path_strip dir

 if not is_dir dir
  dir_make dir

 let base path_base x
 let path path_concat dir base

 ret path_unique path
end
