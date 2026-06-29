gn redact secret:str callable:xn args:etc
 check is_null log_secret

 assign log_secret secret

 var r null

 try
  if is_fn callable
   assign r callable args:etc
  elseif is_gn callable
   assign r run callable args:etc
  else
   stop
 catch e
  assign log_secret null

  throw e
 end

 assign log_secret null

 ret r
end
