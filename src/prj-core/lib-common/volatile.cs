//disable log record to disk

fn volatile x:etc
 assign log_volatile true

 try
  log x:etc
 catch e
  assign log_volatile false

  throw e
 end

 assign log_volatile false
end