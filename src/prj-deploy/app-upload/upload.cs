gn upload x:etc
 let args dup x

 if extract args "--reset"
  sudo_dir_reset www

 let local extract args "--no-upload"
 let local not local

 let fns fn_select "upload_"

 var all true

 forin fns
  let key to_lisp k
  let flag concat "--" key

  if extract args flag
   flower key
   run v local args:etc

   assign all false
  end
 end

 if all
  let skip arr "merlin" "server-jneeg" "server-merlin"

  forin fns
   let key to_lisp k

   if contain skip key
    cont

   flower key
   run v local args:etc
  end
 end

 if is_full args
  let s to_lit "args"

  log "unsupported" s args

  stop
 end
end