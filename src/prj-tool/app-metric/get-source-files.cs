fn get_source_files
 let r arr

 for dir_load "src"
  let ext path_ext v

  if same ext "cs"
   push r v
 end

 ret r
end
