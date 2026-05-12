fn no_umask x:fn y:etc
 var r null
 let mask process.umask 0

 try
  assign r x y:etc
 catch e
  process.umask mask

  throw e
 end

 process.umask mask

 ret r
end