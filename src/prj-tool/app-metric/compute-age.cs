fn compute_age
 let low front source_files
 var low fs_modified low

 let high front source_files
 var high fs_modified high

 for source_files
  let n fs_modified v

  assign low min low n
  assign high max high n
 end

 ret sub high low
end
