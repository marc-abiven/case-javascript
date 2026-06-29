fn os_parallel x:str y:etc
 let command arr x y:etc
 let closed false
 let status null
 let out ""
 let err ""
 let child null
 let context obj command closed status out err child

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

 //on close

 fn on_close x y
  if is_null x
  elseif is_int x
   assign context.status x
  else
   stop

  assign context.closed true
  assign context.out trim_r context.out
  assign context.err trim_r context.err

  process.removeListener "SIGINT" context.on_sigint
 end

 //on error

 fn on_error error:obj
  flower "on-error"

  throw error
 end

 //on sigint

 assign context.child cp.spawn x y

 fn on_sigint x:str
  context.child.kill x
 end

 //main

 assign context.on_sigint sigint on_sigint

 let on_out on on_out
 let on_err on on_err
 let on_close on on_close
 let on_error on on_error

 let stdout context.child.stdout
 let stderr context.child.stderr

 stdout.on "data" on_out
 stderr.on "data" on_err
 context.child.on "close" on_close
 context.child.on "error" on_error

 ret context
end
