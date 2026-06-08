gn upload x:etc
 let args dup x

 if extract args "--reset"
  sudo_dir_reset www

 let local extract args "--no-upload"
 let local not local

 let fns fn_select "upload_"

 var all true

 forin fns
  let fn get fns k
  let key to_lisp k
  let flag concat "--" key

  if extract args flag
   flower key
   run fn local args:etc

   assign all false
  end
 end

 if all
  forin fns
   let fn get fns k
   let key to_lisp k

   flower key
   run fn local args:etc
  end
 end

 if is_full args
  let s to_lit "args"

  log "unsupported" s args

  stop
 end
end