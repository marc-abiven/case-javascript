fn dir_call x:str y:fn z:etc
 var r null
 let dir dir_current

 dir_change x

 try
  assign r y z:etc
 catch e
  dir_change dir

  throw e
 end

 dir_change dir

 ret r
end