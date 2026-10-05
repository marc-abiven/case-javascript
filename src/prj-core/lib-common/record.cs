fn record x:fn y:etc
 push log_stack "" //global

 var result null

 try
  assign result x y:etc
 catch e
  pop log_stack

  throw e
 end

 let output back log_stack
 let output trim_r output

 pop log_stack

 ret obj result output
end
