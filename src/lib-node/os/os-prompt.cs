gn os_prompt x:str y:etc
 //~ check is_str x

 let name x
 var closed false
 var status null
 var out ""
 let err ""
 let buffer obj out err
 
 fn print key:str str:str
  //~ check is_str key
  //~ check is_str str

  let n tty_width
  var s get buffer key

  assign s concat s str
  set buffer key s
  
  if not match_r s "\n"
   ret
   
  let s strip_r s "\n"
  let s txt_prepend s "> "
  let s txt_prepend s key
  let s txt_cut s n

  log s
  
  set buffer key ""
 end

 fn on_out x:obj
  //~ check is_obj x
  
  let s to_str x
  
  print "out" s
 end

 fn on_err x:obj
  //~ check is_obj x

  let s to_str x

  print "err" s
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

 fn on_sigint x:str
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
 
 if is_full buffer out
  print "out" "\n"

 if is_full buffer err
  print "err" "\n"

 os_log os_prompt status x y:etc

 ret status
end
