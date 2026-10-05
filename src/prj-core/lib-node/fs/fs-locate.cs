//climb the directory tree to find the file name

fn fs_locate base:str
 let current dir_current
 let parts path_split current

 while is_full parts
  let a dup parts

  push a base

  let path path_join a

  if is_fs path
   ret path

  drop parts
 end

 stop
end
