fn app_on_any_error stm:obj event:str error:obj context args:etc
 if is_undef context
  let context obj

  ret app_on_any_error stm event error context args:etc
 end

 //report node

 fn report_node report:obj
  if is_remote
   report_mail report
 end

 //report browser

 fn report_browser report:obj
  let s report_render report

  assign document.title report.message

  let dialog dom_dialog

  dom_font_family dialog font_family
  dom_font_size dialog font_size

  let pre dom_pre

  dom_text pre s
  dom_push dialog pre
  dom_push body dialog
  dom_modal dialog
 end

 //error format

 fn error_format error:obj context:obj
  let r obj

  for obj_properties error
   let k v
   let v get error k

   put r k v
  end

  forin context
   //duplicate key

   if has r k
    let key k
    let value v
    let error get r k

    if different value error
     let o obj key value error
     let s obj_option o

     log "context" s
    end

    cont
   end

   //add

   put r k v
  end

  let thread get_thread

  put r "thread" thread

  ret r
 end

 //main

 try
  //do not display errors in errors

  if same stm.status "error"
   ret

  //report

  verbose_on

  let error error_format error context
  let report report_init error

  report_log report

  //node

  if is_node
   report_node report

   ret "error"
  end

  //browser

  if is_browser
   report_browser report

   stm_post stm "post" report

   ret "report"
  end

  //any

  stop
 catch e
  try
   console.log "catch-fallback"

   console.log "original-error"
   stm.report error

   console.log "error-in-error"
   stm.report e
  catch e2
   console.log "catch-fatal"

   console.log "original-error"
   console.log error

   console.log "error-in-error"
   console.log e

   console.log "error-in-error-in-error"
   console.log e2
  end
 end
end
