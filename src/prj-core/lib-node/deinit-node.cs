fn deinit_node
 //clean tmp

 fn clean_tmp
  fs_remove config_tmp

  let app path_up config_tmp

  if dir_empty app
   fs_remove app

  //remove old files and dirs sometimes
  //those who haven't been removed because the app crashed

  let n random 16

  if same n 0
   let dir_tmp path_up app
   let dir_log path_up config_log

   let before time_now
   let old_tmp remove_old_files dir_tmp
   let old_log remove_old_files dir_log
   let after time_now
   let profile sub after before

   //log

   let old_file add old_tmp old_log
   var message false

   if gt old_file 0
    assign message true
   elseif gt profile 2
    assign message true

   if message
    let profile to_fixed profile
    let profile concat profile "s"
    var o null

    if gt old_file 0
     assign o obj old_file profile
    else
     assign o obj profile

    let s obj_option o

    log "clean-tmp" s
   end
  end
 end

 //remove old files

 fn remove_old_files dir:str
  var r 0
  let begin time_now
  let paths dir_load dir true

  for paths
   //timeout

   let now time_now
   let delay sub now begin

   if gt delay 1 //seconds
    brk

   //already deleted

   if not is_fs v
    cont

   let modified fs_modified v
   let now time_get
   let age sub now modified

   //one week old

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

   if remove
    fs_remove v

    let dir dir_current
    let dir path_fix dir
    let path strip_l v dir
    let age time_delay age
    let o obj path age
    let s obj_option o

    assign r inc r
   end
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

 //clean tmp

 try
  clean_tmp
 catch
  //can fail because of another instance of the process
  //can delete files in the background
 end

 //restore cwd

 dir_change cwd
end
