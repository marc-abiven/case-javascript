//print the output and return it at the same time

gn os_capture x:str y:etc
 //print

 let command arr x y:etc
 var closed false
 var logged false
 var status null
 var out ""
 var err ""
 let buffer obj out err

 fn print key:str str:str
  let s get buffer key
  let s concat s str

  set buffer key s

  if not match_r s lf //partial read
   ret

  //log

  if not logged
   os_log os_capture status "" "" command:etc

   assign logged true
  end

  let s strip_r s lf

  if same key "out"
   log s
  elseif same key "err"
   let prompt concat " " app " err> "
   let a arr

   for split s
    let s concat prompt v
    let s head s tty_column

    if lt s.length tty_column
     let s concat s "\r\n" //because of systemd

     push a s
    else
     push a s
   end

   let s implode a

   stdout_write s //no lf added
  else
   stop

  set buffer key ""
 end

 //on out

 fn on_out data:obj
  let s to_str data

  print "out" s
  assign out concat out s
 end

 //on err

 fn on_err data:obj
  let s to_str data
  let s ansi_strip s

  print "err" s
  assign err concat err s
 end

 //on close

 fn on_close x y
  if is_null x
  elseif is_int x
  else
   stop

  assign status x
  assign closed true
 end

 //on error

 fn on_error error:obj
  flower "on-error"

  throw error
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
 let on_error on on_error

 let stdout child.stdout
 let stderr child.stderr

 stdout.on "data" on_out
 stderr.on "data" on_err
 child.on "close" on_close
 child.on "error" on_error

 while not closed
  yield
 end

 //show partial read

 if is_full buffer.out
  print "out" lf

 if is_full buffer.err
  print "err" lf

 process.removeListener "SIGINT" on_sigint

 //normalize

 let out trim_r out
 let err trim_r err

 //log

 if not logged
  os_log os_capture status "" "" command:etc

 ret obj status out err
end