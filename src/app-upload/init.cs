gn init x:etc
 assign global.www "/var/www/html"

 fn load_src
  let a dir_load "src"
  var r join a

  forof a
   let content file_read v

   assign r concat r content
  end

  ret r
 end

 let parameters dup x
 let wait extract parameters "--wait"

 if not wait
  run upload parameters:etc

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

  run upload parameters:etc
 end
end