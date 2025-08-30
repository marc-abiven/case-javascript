fn deinit_node
 dir_change cwd

 let tmp path_tmp
 let tmp path_dir tmp
 
 fs_remove tmp
 
 let app path_up tmp
 let paths dir_read app true

 if is_empty paths
  fs_remove app
end
