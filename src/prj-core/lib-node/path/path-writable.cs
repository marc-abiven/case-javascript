fn path_writable path:str
 let path path_real path
 let components path_split path

 while is_full components
  let path path_join components

  //top level directory

  if lte path.length 2 //like /home/user
   brk

  //writable

  fs_writable path

  //next

  drop components
 end
end