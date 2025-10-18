fn os_log call:xn status:int args:etc
 if same status 0
  ret

 var command front args
 var subcommand false

 if is_many args
  if same command "sudo"
   assign subcommand true
  elseif same command "time"
   assign subcommand true
 end

 if subcommand
  let s at args 1

  assign command space command s
 end

 let call replace call.name "_" "-"
 let o obj command status
 let s obj_option o

 trace call s
end
