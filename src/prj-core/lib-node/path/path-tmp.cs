fn path_tmp path
 if is_undef path
  ret path_tmp "tmp.txt"

 check is_str path

 //split path

 let dir path_split path

 pop dir

 let dir path_join dir
 let dir path_concat config_tmp dir
 let dir path_unfix dir

 if not is_dir dir
  dir_make dir

 let base path_base path
 let path path_concat dir base

 //unique

 ret path_unique path
end
