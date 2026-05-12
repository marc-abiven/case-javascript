fn path_writable x:fs
 let path path_real x
 let components path_split path

 while is_full components
  let path path_join components

  //top level directory

  if lte path.length 2
   brk

  //add read/write mode

  let a_rw 438 //666
  let a_rwx 511 //777

  let mode fs_mode path

  if is_file path
   let bits inline "mode & a_rw"

   if same bits a_rw
   else
    fs_change_mode path a_rw
  elseif is_dir path
   let bits inline "mode & a_rwx"

   if same bits a_rwx
   else
    fs_change_mode path a_rwx
  else
   stop

  //next

  drop components
 end
end