fn record x:fn y:etc
 check is_null log_output

 assign log_output "" //global

 var result null

 try
  assign result x y:etc
 catch e
  assign log_output null

  throw e
 end

 let output trim_r log_output

 assign log_output null

 ret obj result output
end
