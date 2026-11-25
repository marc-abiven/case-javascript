fn os_parallel command:str args:etc
 let closed false
 let status null
 let out ""
 let err ""
 let child null
 let context obj command args closed status out err child

 //on out

 fn on_out data:obj
  let s to_str data
  let s ansi_strip s

  assign context.out concat context.out s
 end

 //on err

 fn on_err data:obj
  let s to_str data
  let s ansi_strip s

  assign context.err concat context.err s
 end

 //on error

 fn on_error error:obj
  flower "on-error"

  throw error
 end

 //on exit

 fn on_exit status signal
  assign context.status status

  if same status 0
   //success
  else
   let o obj command args status signal
   let s obj_option o

   log "exit" s
  end
 end

 //on close

 fn on_close status signal
  assign context.closed true
  assign context.out trim_r context.out
  assign context.err trim_r context.err

  if same status 0
   //success
  else
   let o obj command args status signal
   let s obj_option o

   trace "close" s
  end
 end

 //main

 assign context.child cp.spawn command args

 let on_out on on_out
 let on_err on on_err

 let on_error on on_error
 let on_exit on on_exit
 let on_close on on_close

 let stdout context.child.stdout
 let stderr context.child.stderr

 stdout.on "data" on_out
 stderr.on "data" on_err

 context.child.on "error" on_error
 context.child.on "exit" on_exit
 context.child.on "close" on_close

 ret context
end
