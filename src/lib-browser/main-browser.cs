fn main_browser
 fn on_error x y z a b
  check is_str x
  check is_str y
  check is_uint z
  check is_uint a   
  check is_obj b
  
  log "ok"
  
  log b
  
  flower x
  
  let origin_cs dbg_origin_cs b
  let origin_cs tbl_render origin_cs
  
  log origin_cs
  
  let backtrace dbg_backtrace b
  let backtrace tbl_render backtrace
  
  log backtrace
  
  let origin_js dbg_origin_js b
  let origin_js tbl_render origin_js
  
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
  dom_text pre_origin_js origin_js
  dom_text pre_backtrace backtrace

  let div_continue dom_div
  
  dom_text div_continue "Refresh the page or go to another URL to continue."
  
  let spacer1 dom_spacer
  let spacer2 dom_spacer
  let spacer3 dom_spacer
  let spacer4 dom_spacer
  
  dom_append dialog div_message
  dom_append dialog spacer1
  dom_append dialog pre_origin_cs
  dom_append dialog spacer2
  dom_append dialog pre_origin_js
  dom_append dialog spacer3
  dom_append dialog pre_backtrace
  dom_append dialog spacer4
  dom_append dialog div_continue
  dom_append body dialog
  
  dom_modal dialog
  
  ret true
 end
 
 assign global.html document.documentElement
 assign global.body document.body
 assign global.font "1.5vw monospace"
 
 assign window.onerror value on_error
end
