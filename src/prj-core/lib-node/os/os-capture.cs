//print the output of a command and return it at the same time

gn os_capture command:str args:etc
 //print

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
   os_report os_capture status "" "" command args:etc

   assign logged true
  end

  //prompt

  var s strip_r s lf

  if same key "err"
   let prompt concat " " meta.app " " key "> "

   assign s txt_prepend s prompt
  end

  log s

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

 //on error

 fn on_error error:obj
  flower "on-error"

  throw error
 end

 //on exit

 fn on_exit _status signal
  assign status _status

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
  assign closed true

  let o obj command args status signal
  let s obj_option o

  trace "close" s
 end

 //main

 let child cp.spawn command args

 let on_out on on_out
 let on_err on on_err

 let on_error on on_error
 let on_exit on on_exit
 let on_close on on_close

 let stdout child.stdout
 let stderr child.stderr

 stdout.on "data" on_out
 stderr.on "data" on_err

 child.on "error" on_error
 child.on "exit" on_exit
 child.on "close" on_close

 while not closed
  yield
 end

 //show partial read

 if is_full buffer.out
  print "out" lf

 if is_full buffer.err
  print "err" lf

 //normalize

 let out trim_r out
 let err trim_r err

 //log

 if not logged
  os_report os_capture status "" "" command args:etc

 ret obj status out err
end
