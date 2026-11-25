//show the result of a process function

fn os_report call:xn status out:str err:str args:etc
 let call strip_l call.name "os_"
 let call to_lisp call
 let command join args " "
 var o obj command

 if is_int status
  if different status 0
   assign o obj_unshift o "status" status
 end

 let s obj_option o

 log call s

 if is_full out
  let out txt_compact out
  let out split out
  let out tail out 512
  let prompt concat " " meta.app " out> "
  let s txt_prepend out prompt
  let s join s

  log s
 end

 if is_full err
  let err txt_compact err
  let err split err
  let err tail err 512
  let prompt concat " " meta.app " err> "
  let s txt_prepend err prompt
  let s join s

  log s
 end
end
