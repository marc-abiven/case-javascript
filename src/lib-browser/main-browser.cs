fn main_browser
 fn render_backtrace x
  check is_arr x
  
  let backtrace tbl_render x
  let backtrace txt_prepend backtrace "> "
  
  if is_full backtrace
   flower "backtrace"
   log backtrace
  end
 end
 
 fn on_error x y z a b
  check is_str x
  check is_str y
  check is_uint z
  check is_uint a   
  check is_obj b
  
  log b
  
  flower x  
  
  let origin_cs capture dbg_origin_cs b.stack
  
  log origin_cs
  
  let backtrace dbg_backtrace b.stack

  tbl_remove_column backtrace "njs"
  tbl_remove_column backtrace "js"

  let backtrace capture render_backtrace backtrace
  
  if is_full backtrace  
   log backtrace
  
  let origin_js capture dbg_origin_js b.stack

  log origin_js

  let dialog dom_dialog
  
  dom_font_family dialog "monospace"
  dom_font_size dialog "1.1vw"
     
  let div_message dom_div
  let s b.constructor.name
  let s concat s " / " b.message
  let s paren s
  let s space "An error has occured" s
  let s concat s "."
  
  dom_text div_message s
  
  let pre_origin_cs dom_pre
  let pre_origin_js dom_pre
  let pre_backtrace dom_pre

  dom_text pre_origin_cs origin_cs
  dom_text pre_backtrace backtrace
  dom_text pre_origin_js origin_js

  let div_continue dom_div
  
  dom_text div_continue "Refresh the page or go to another URL to continue."
  
  let spacer1 dom_spacer
  let spacer2 dom_spacer
  let spacer3 dom_spacer
  let spacer4 dom_spacer
  
  dom_push dialog div_message
  dom_push dialog spacer1
  dom_push dialog pre_origin_cs
  dom_push dialog spacer2
  
  if is_full backtrace
   dom_push dialog pre_backtrace
   dom_push dialog spacer3
  end
  
  dom_push dialog pre_origin_js
  dom_push dialog spacer4
  dom_push dialog div_continue
  dom_push body dialog
  
  dom_modal dialog
  
  ret true
 end
 
 assign global.html document.documentElement
 assign global.body document.body
 assign global.font "1.5vw monospace"
 
 assign window.onerror value on_error
 
 let sloc dbg_source
 let sloc split sloc
 let sloc sloc.length
 
 log "sloc" sloc
end
