fn record x y:etc
 check is_fn x
 check is_null output

 assign global.output ""

 var result null

 try
  assign result x y:etc
 catch e
  assign global.output null
  
  throw e
 end

 let s trim_r output

 assign global.output null

 let r obj

 assign r.result result
 assign r.output s

 ret r
end
