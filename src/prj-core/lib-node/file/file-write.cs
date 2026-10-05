fn file_write path:str data:str
 let tmp path_unique path

 try
  fs.writeFileSync tmp data
 catch e
  //can be partially written
  
  try
   fs_remove tmp
  catch e
  end
  
  throw e
 end

 try
  fs_rename tmp path //atomic
 catch e
  //error
  
  try
   fs_remove tmp
  catch e
  end

  throw e
 end

 fs_writable path
end
