gn os_detach command:str args:etc
 var logged false

 //print

 fn print key:str str:str
  let s strip_r str lf
  let prompt concat " " meta.app " " key "> "
  let s txt_prepend s prompt

  if not logged
   os_report os_detach 0 "" "" command args:etc

   assign logged true
  end

  log s
 end

 //on out

 fn on_out data:obj
  let s to_str data

  print "out" s
 end

 //on err

 fn on_err data:obj
  let s to_str data

  print "err" s
 end

 //on error

 fn on_error error:obj
  flower "on-error"

  throw error
 end

 //on exit

 fn on_exit status signal
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
  let o obj command args status signal
  let s obj_option o

  trace "close" s
 end

 //main

 let detached true
 let stdio arr "ignore" "pipe" "pipe"
 let o obj detached stdio
 let child cp.spawn command args o

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

 //wait a bit in case of an output or an error

 run sleep 0.1

 child.unref //don't block the message loop
end
