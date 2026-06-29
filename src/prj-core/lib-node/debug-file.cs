fn debug_file x:etc
 let fs require "fs"
 let args clone x
 let s stringify args:etc
 let s concat s "\n"
 //~ let a arr

 //~ for args
  //~ if is_str v
   //~ push a v

   //~ cont
  //~ end

  //~ let s json_dump v

  //~ push a s
 //~ end

 //~ let s join a " "
 //~ let s concat s "\n"

 fs.appendFileSync "debug.txt" s
end
