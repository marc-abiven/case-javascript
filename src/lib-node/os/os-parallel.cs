fn os_parallel x:str y:etc
 let command arr x y:etc
 let closed false
 let status null
 let out ""
 let err ""
 let child null
 let context obj command closed status out err child

 //on out

 fn on_out x:obj
  let s to_str x

  assign context.out concat context.out s
 end

 //on err

 fn on_err x:obj
  let s to_str x

  assign context.err concat context.err s
 end

 //on close

 fn on_close x
  if is_null x
  elseif is_uint x
  else
   stop

  assign context.status x
  assign context.closed true
  assign context.out trim_r context.out
  assign context.err trim_r context.err

  process.removeListener "SIGINT" on_sigint
 end

 //on sigint

 assign context.child cp.spawn x y

 fn on_sigint x:str
  context.child.kill x
 end

 //main

 let on_sigint sigint on_sigint

 let on_out on on_out
 let on_err on on_err
 let on_close on on_close

 let stdout context.child.stdout
 let stderr context.child.stderr

 stdout.on "data" on_out
 stderr.on "data" on_err
 context.child.on "close" on_close

 ret context
end
