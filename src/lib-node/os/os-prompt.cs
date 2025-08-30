gn os_prompt x y:etc
 check is_str x

 let name x
 var closed false
 var status null
 
 fn print x y
  check is_obj x
  check is_str y
  
  let n tty_width
  
  let s to_str x
  let s strip_r s "\n"
  let s txt_prepend s "> "
  let s txt_prepend s y
  let s txt_cut s n
  
  log s
 end

 fn on_out x
  check is_obj x

  print x "out"
 end

 fn on_err x
  check is_obj x
  
  print x "err"
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

 os_log os_prompt status x y:etc

 ret status
end
