//atomic file read

fn file_read path:str encoding
 //remove
 
 fn remove path:str
  if not is_file path
   ret

  var error null
  
  try
   fs_remove path
  catch e
   assign error e
  end

  let o obj path error
  let s obj_option o

  trace "remove" s
 end
 
 //main
 
 if is_def encoding
  check is_str encoding

 if is_undef encoding
  ret file_read path "utf8"

 //make a link in the same directory

 let tmp path_unique path
 var buffer null

 try
  fs.linkSync path tmp //atomic
 catch e
  //filter some errors

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
   //rethrow
   
   throw e
  end
 end

 //read and remove the link

 if is_null buffer
  //read link

  try
   assign buffer fs.readFileSync tmp
  catch e
   //clean link
   
   try
    fs.unlinkSync tmp
   catch e
   end
   
   //remove
   
   remove tmp
   
   //rethrow
   
   throw e
  end
  
  //clean link
  
  try
   fs.unlinkSync tmp
  catch e
   //remove
   
   remove tmp
   
   //rethrow
   
   throw e
  end
 end

 //decode

 ret buffer.toString encoding
end
