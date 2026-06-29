//close a process launched by os_parallel

fn os_end context:obj
 check context.closed

 let status context.status
 let command context.command
 let out context.out
 let err context.err

 //log failed commands and those having an output

 var report false

 if os_failure context
  assign report true
 elseif is_full out
  assign report true

 //report

 if report
  os_report os_parallel status out err command:etc

 //error

 let command front command
 let command to_lit command

 if is_null status
  let message space "Command" command "failed"

  stop message
 elseif different status 0
  let o obj status
  let s obj_option o
  let s paren s
  let message space "Command" command "failed" s

  stop message
 end
end
