gn os_prompt x:str y:etc
 //print

 var closed false
 var status null
 let out ""
 let err ""
 let buffer obj out err

 fn print key:str str:str
  let s get buffer key
  let s concat s str

  set buffer key s

  if not match_r s lf
   ret

  let s strip_r s lf
  let s txt_prepend s "> "
  let s txt_prepend s key

  log s

  set buffer key ""
 end

 //on out

 fn on_out x:obj
  let s to_str x

  print "out" s
 end

 //on err

 fn on_err x:obj
  let s to_str x

  print "err" s
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

 let child cp.spawn x y

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
  print "out" lf

 if is_full buffer.err
  print "err" lf

 process.removeListener "SIGINT" on_sigint

 os_log os_prompt status x y:etc

 ret status
end
