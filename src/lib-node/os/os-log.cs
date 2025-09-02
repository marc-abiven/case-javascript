fn os_log call status args:etc
 check is_xn call
 check is_int status

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
 let command to_lit command
 let status concat "status=" status

 trace call command status
end