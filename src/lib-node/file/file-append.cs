fn file_append x:str y:str
 no_umask fs.appendFileSync x y
end

//~ fn file_append x:str y:str
 //~ let mask process.umask 0

 //~ try
  //~ fs.appendFileSync x y
 //~ catch e
  //~ process.umask mask

  //~ throw e
 //~ end

 //~ process.umask mask
//~ end