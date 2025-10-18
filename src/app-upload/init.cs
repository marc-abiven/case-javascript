gn init x:etc
 assign global.www "/var/www/html"
 
 //load src

 fn load_src
  let a dir_load "src"
  var r join a

  for a
   let content file_load v

   assign r concat r content
  end

  ret r
 end
 
 //main

 let args dup x
 let wait extract args "--wait"

 if not wait
  run upload args:etc
  ret
 end

 var checksum ""
 var n 1
 var wait false

 while true
  let s load_src
  let c digest s

  if same c checksum
   if not wait
    log "wait"

   run sleep 0.5
   assign wait true

   cont
  end

  assign checksum c

  let s time_str

  log "changed" n s

  assign n inc n
  assign wait false

  run upload args:etc
 end
end
