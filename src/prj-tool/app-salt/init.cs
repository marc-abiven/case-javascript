fn init x:etc
 let args dup x
 var direction "salt"

 if extract args "--salt"
  assign direction "salt"

 if extract args "--unsalt"
  assign direction "unsalt"

 let message shift args

 if is_full args
  let s to_lit "args"

  log "unsupported" s args

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