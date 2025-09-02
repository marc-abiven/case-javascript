gn os_capture x y:etc
 var closed false
 var status null
 var out ""
 var err ""

 fn on_out x
  check is_obj x

  let s to_str x

  write s

  assign out concat out s
 end

 fn on_err x
  check is_obj x

  let s to_str x

  assign err concat err s
 end

 fn on_close x
  if is_null x
  elseif is_uint x
  else
   stop

  assign status x
  assign closed true
 end

 let child cp.spawn x y

 fn on_sigint x
  check is_str x

  child.kill x
 end

 sigint on_sigint

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

 let out trim_r out
 let err trim_r err

 os_log os_capture status x y:etc

 ret obj status out err
end