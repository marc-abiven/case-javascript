fn file_write path:str data:str
 let tmp path_unique path

 no_umask fs.writeFileSync tmp data

 try
  fs_rename tmp path //atomic
 catch e
  fs_remove tmp

  throw e
 end
end
