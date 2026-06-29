fn deinit_node stm:obj
 //clean tmp

 fn clean_tmp
  //paths

  let dir_tmp path_up config_tmp
  let dir_tmp path_up dir_tmp
  let dir_log path_up config_log

  //remove

  let count_tmp remove_old_files dir_tmp
  let count_log remove_old_files dir_log

  //log

  let count add count_tmp count_log

  if gt count 0
   let o obj count
   let s obj_option o

   log "clean-tmp" s
  end
 end

 //remove old files

 fn remove_old_files dir:str
  var r 0
  let paths dir_load dir true //can take more than 1 second
  let paths shuffle paths
  let paths head paths 1024

  for paths
   //already deleted

   if not is_fs v
    cont

   let modified fs_modified v
   let now time_get
   let age sub now modified

   //one week old at least

   if lt age week
    cont

   //not empty

   var remove false

   if is_skeleton v
    assign remove true
   elseif is_dir v
    nop
   elseif is_file v
    assign remove true
   else
    stop

   //remove

   if not remove
    cont

   fs_remove v

   assign r inc r
  end

  ret r
 end

 //is skeleton
 //tree of empty dirs

 fn is_skeleton x:str
  if is_file x
   ret false

  let paths dir_load x true

  for paths
   if is_dir v
    if not is_skeleton v
     ret false
   elseif is_file v
    ret false
   else
    stop
  end

  ret true
 end

 //main

 //main thread

 if is_main_thread
  //clean tmp

  fs_remove config_tmp

  //remove old files and dirs sometimes
  //those who haven't been removed because the app crashed

  let n random 16

  if same n 0
   try
    clean_tmp
   catch
    //can fail because of another instance of the process
    //can delete files in the background
   end
  end

  //restore cwd

  dir_change cwd
 end
end
