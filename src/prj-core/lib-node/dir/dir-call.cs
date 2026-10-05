fn dir_call path:str fn:fn args:etc
 var r null
 let current dir_current

 dir_change path

 try
  assign r fn args:etc
 finally
  dir_change current
 end

 ret r
end

//~ fn dir_call path:str fn:fn args:etc
 //~ var r null
 //~ let current dir_current

 //~ dir_change path

 //~ try
  //~ assign r fn args:etc
 //~ catch e
  //~ dir_change current

  //~ throw e
 //~ end

 //~ dir_change current

 //~ ret r
//~ end
