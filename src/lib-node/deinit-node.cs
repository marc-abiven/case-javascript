fn deinit_node
 //remove old files

 fn remove_old_files path:str
  for dir_load path true
   let modified fs_modified v
   let now time_get
   let age sub now modified

   //one week old

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

   var remove false

   if is_dir v
    if dir_empty v
     assign remove true
   elseif is_file v
    assign remove true
   else
    stop

   if remove
    fs_remove v

    trace "remove" path age
   end
  end
 end

 //main

 if dir_empty config_tmp
  fs_remove config_tmp

 let app path_up config_tmp

 if dir_empty app
  fs_remove app

 //remove old files and dirs

 let dir_tmp path_up app
 let dir_log path_up config_log

 remove_old_files dir_tmp
 remove_old_files dir_log

 //restore cwd

 dir_change cwd
end
