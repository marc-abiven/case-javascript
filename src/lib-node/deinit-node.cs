fn deinit_node
 //remove old files

 fn remove_old_files dir:str
  for dir_load dir true
   let modified fs_modified v
   let now time_get
   let age sub now modified

   //one week old

   if lt age week
    cont

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

    let dir dir_current
    let dir path_fix dir
    let path strip_l v dir
    let age time_delay age
    let o obj path age
    let s obj_option o

    trace "remove" s
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
 
 let n random 16
 
 if same n 0
  let dir_tmp path_up app
  let dir_log path_up config_log

  remove_old_files dir_tmp
  remove_old_files dir_log
 end

 //restore cwd

 dir_change cwd
end
