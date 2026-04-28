fn app_token x:str
 let home os_home
 let base concat "." x

 let path_cwd base
 let path_home path_concat home base
 let path_common path_concat common base

 var path null

 if is_file path_cwd
  assign path path_cwd
 elseif is_file path_home
  assign path path_home
 elseif is_file path_common
  assign path path_common
 else
  stop

 let r file_load path
 let r base36_decode r
 let r salt r

 ret r
end