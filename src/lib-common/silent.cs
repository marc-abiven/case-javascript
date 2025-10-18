fn silent x:fn y:etc
 let previous verbose

 assign verbose sub verbose 2

 var r null

 try
  assign r x y:etc
 catch e
  assign verbose previous

  throw e
 end

 assign verbose previous

 ret r
end
