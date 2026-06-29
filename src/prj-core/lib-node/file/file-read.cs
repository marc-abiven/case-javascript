//atomic file read

fn file_read path:str encoding
 if is_def encoding
  check is_str encoding

 if is_undef encoding
  ret file_read path "utf8"

 //make a link

 let tmp path_unique path
 var buffer null

 try
  fs.linkSync path tmp //atomic
 catch e
  //error

  if is_file tmp
   fs_remove tmp

   let o obj tmp
   let s obj_option o

   trace "remove" s
  end

  let codes
   "EPERM" //system files and those not owned by the current user
   "EACCES" //no write access to the directory
   "ENOENT" //the path disappeared temporarily (?)
  end

  if contain codes e.code
   //unsafe read

   assign buffer fs.readFileSync path

   let o obj path
   let s obj_option o

   trace "unsafe-read" s
  else
   throw e
 end

 //read and remove the link

 if is_null buffer
  try
   assign buffer fs.readFileSync tmp
  catch e
   fs.unlinkSync tmp

   throw e
  end

  fs.unlinkSync tmp

  if is_file tmp
   fs_remove tmp

   let o obj tmp
   let s obj_option o

   trace "remove" s
  end
 end

 //convert

 ret buffer.toString encoding
end