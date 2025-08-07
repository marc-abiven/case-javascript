fn init x:etc
 let parameters dup x
 var direction "salt"
 
 if extract parameters "--salt"
  assign direction "salt"
  
 if extract parameters "--unsalt"
  assign direction "unsalt"
  
 let message shift parameters

 if is_full parameters
  log parameters
  
  let s to_lit "parameters"
  
  log "unsupported" s
  
  ret
 end

 if same direction "salt"
  let message salt message
  let message base36_encode message
 
  log message
 elseif same direction "unsalt"
  let message base36_decode message
  let message salt message
 
  log message
 else
  stop
end
