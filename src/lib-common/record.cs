fn record x:fn y:etc
 check is_null output

 //output is a global variable

 assign output ""

 var result null

 try
  assign result x y:etc
 catch e
  assign output null

  throw e
 end

 let s trim_r output

 assign output null

 let r obj

 assign r.result result
 assign r.output s

 ret r
end