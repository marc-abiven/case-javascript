//add read/write mode

fn fs_writable path:str
 let a_rw 438 //666
 let a_rwx 511 //777

 let mode fs_mode path

 //file

 if is_file path
  let bits inline "mode & a_rw"

  if same bits a_rw
  else
   fs_change_mode path a_rw

  ret
 end

 //directory

 if is_dir path
  let bits inline "mode & a_rwx"

  if same bits a_rwx
  else
   fs_change_mode path a_rwx

  ret
 end

 //any

 stop
end
