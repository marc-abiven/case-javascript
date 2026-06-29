fn dir_read dir:str with_dirs
 if is_undef with_dirs
  ret dir_read dir false

 check is_bool with_dirs

 let r arr
 let dir path_real dir
 let a fs.readdirSync dir

 sort a

 for a
  let path path_concat dir v

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