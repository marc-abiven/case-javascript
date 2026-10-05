//disable log verbose for a function call
//nothing is evaluated

fn silent fn:fn args:etc
 var r null
 let previous verbose //global

 assign verbose -2

 try
  assign r fn args:etc
 finally
  assign verbose previous
 end

 ret r
end
