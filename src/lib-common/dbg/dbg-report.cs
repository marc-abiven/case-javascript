fn dbg_report x
 check is_obj x
 
 fn log_talk
  if is_empty talks
   ret

  flower "log"

  forof talks
   log "debug>" v:etc
  end
 end
 
 fn log_backtrace x
  check is_str x

  let backtrace dbg_backtrace x
  
  tbl_remove_column backtrace "njs"
  tbl_remove_column backtrace "js"
  
  let backtrace tbl_render backtrace
  let backtrace txt_prepend backtrace "> "

  if is_full backtrace
   flower "backtrace"
   log backtrace
  end
 end

 let stack x.stack
 let title space x.constructor.name "/" x.message "/" app
 let talk capture log_talk
 let cs capture dbg_origin_xs stack "cs"
 let backtrace capture log_backtrace stack
 let js capture dbg_origin_xs stack "js"
 
 flower title
 
 if is_full talk
  log talk

 log cs
 log backtrace
 log js

 ret obj title talk cs backtrace js
end
