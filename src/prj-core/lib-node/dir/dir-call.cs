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
