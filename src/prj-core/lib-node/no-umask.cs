fn no_umask x:fn y:etc
 var r null
 let mask process.umask 0

 try
  assign r x y:etc
 finally
  process.umask mask
 end

 ret r
end