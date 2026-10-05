fn find_oldest_file
 var path front source_files
 var modified fs_modified path

 for source_files
  let t fs_modified v

  if lt t modified
   assign path v
   assign modified t
  end
 end

 ret path_base path
end
