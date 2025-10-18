gn os_capture x:str y:etc
 //print
 
 var closed false
 var status null
 var out ""
 var err ""
 var buffer ""

 fn print x:str
  assign buffer concat buffer x

  if not match_r buffer lf
   ret

  let line strip_r buffer lf

  log line

  let s ansi_strip buffer

  assign out concat out s
  assign buffer ""
 end
 
 //on out

 fn on_out x:obj
  let s to_str x

  print s
 end
 
 //on err

 fn on_err x:obj
  let s to_str x
  let s ansi_strip s

  assign err concat err s
 end
 
 //on close

 fn on_close x
  if is_null x
  elseif is_uint x
  else
   stop

  assign status x
  assign closed true
 end
 
 //on sigint

 let stdio arr "inherit" "pipe" "pipe"
 let option obj stdio
 let child cp.spawn x y option

 check is_obj child

 fn on_sigint x:str
  child.kill x
 end
 
 //main

 let on_sigint sigint on_sigint

 let on_out on on_out
 let on_err on on_err
 let on_close on on_close

 let stdout child.stdout
 let stderr child.stderr

 stdout.on "data" on_out
 stderr.on "data" on_err
 child.on "close" on_close

 while not closed
  yield
 end

 if is_full buffer.out
  print lf

 let out trim_r out
 let err trim_r err

 process.removeListener "SIGINT" on_sigint

 os_log os_capture status x y:etc

 ret obj status out err
end
