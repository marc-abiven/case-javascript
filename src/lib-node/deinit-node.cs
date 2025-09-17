fn deinit_node
 //dir empty
 
 fn dir_empty x:str
  let paths dir_read x true
 
  ret is_empty paths
 end
 
 //main

 let tmp path_tmp
 let tmp path_dir tmp

 fs_remove tmp

 let app path_up tmp
 
 if dir_empty app
  fs_remove app
  
 //remove old files and dirs
  
 forof dir_load "tmp" true
  let modified fs_modified v
  let now time_get  
  let age sub now modified
  
  if lt age week
   cont
  
  let dir dir_current
  let dir path_fix dir
  let path strip_l v dir
  let path to_lit path
  let path concat "path=" path
  let age time_delay age
  let age to_lit age
  let age concat "age=" age
  
  if is_dir v
   if dir_empty v
    fs_remove v
  elseif is_file v
   fs_remove v
  else
   stop
  
  trace "remove" path age
 end
 
 //restore cwd

 dir_change cwd
end
