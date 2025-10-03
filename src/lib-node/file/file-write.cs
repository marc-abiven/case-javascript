fn file_write x:str y:str
 no_umask fs.writeFileSync x y
end

//~ fn file_write x:str y:str
 //~ let mask process.umask 0

 //~ try
  //~ fs.writeFileSync x y
 //~ catch e
  //~ process.umask mask

  //~ throw e
 //~ end

 //~ process.umask mask
//~ end