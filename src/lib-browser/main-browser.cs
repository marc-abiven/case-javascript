fn main_browser
 fn on_error x y z a b
  check is_str x
  check is_str y
  check is_uint z
  check is_uint a
  check is_obj b

  log b
  
  let report dbg_report b
  let dialog dom_dialog

  dom_font_family dialog "monospace"
  dom_font_size dialog "1.1vw"

  let div_title dom_div
  let s paren report.title
  let s space "An error has occured" s
  let s concat s "."

  dom_text div_title s

  let pre_talk dom_pre
  let pre_cs dom_pre
  let pre_js dom_pre
  let pre_backtrace dom_pre

  dom_text pre_talk report.talk
  dom_text pre_cs report.cs
  dom_text pre_backtrace report.backtrace
  dom_text pre_js report.js

  let div_continue dom_div

  dom_text div_continue "Refresh the page or go to another URL to continue."

  let spacer1 dom_spacer
  let spacer2 dom_spacer
  let spacer3 dom_spacer
  let spacer4 dom_spacer
  let spacer5 dom_spacer

  dom_push dialog div_title

  if is_full report.talk
   dom_push dialog spacer1
   dom_push dialog pre_talk
  end

  if is_full report.cs
   dom_push dialog spacer2
   dom_push dialog pre_cs
   dom_push dialog spacer3
  end

  if is_full report.backtrace
   dom_push dialog pre_backtrace
   dom_push dialog spacer4
  end

  if is_full report.js
   dom_push dialog pre_js
   dom_push dialog spacer5
  end
  
  dom_push dialog div_continue
  dom_push body dialog

  dom_modal dialog

  ret true
 end

 assign global.html document.documentElement
 assign global.body document.body
 assign global.font "1.5vw monospace"

 assign window.onerror value on_error
end
