fn path_tmp x
 if is_undef x
  ret path_tmp "tmp"
  
 check is_str x
 check is_dir x
 
 while true
  let r random
  let r to_base36 r
  let r concat r ".txt"
  let r path_concat x r
  
  if not is_file r
   ret r
 end
end
