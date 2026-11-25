fn dir_read path:str with_dirs
 if is_undef with_dirs
  ret dir_read path false

 check is_bool with_dirs

 let r arr
 let path path_real path
 let a fs.readdirSync path

 sort a

 for a
  let path path_concat path v

  //file

  if is_file path
   push r path

   cont
  end

  //directory

  if is_dir path
   if with_dirs
    push r path

   cont
  end

  //symbolic link

  if is_symbolic_link path
   cont

  //any

  let o obj path
  let s obj_option o

  trace "dir-read" s
 end

 ret r
end
