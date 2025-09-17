fn init_browser
 var dying false

 gn report_error report:obj
  try
   if dying
    ret

   assign dying true

   while true
    let url concat location.protocol "//mabynogy.org/report"
    let result run xhr_post url report

    if is_false result
     run sleep 32
     cont
    end

    let s to_lit result

    log "report" s

    brk
   end

   deinit_common
  catch e
   fallback_error "report-error" e
  end
  
  assign zombie true
 end

 fn on_error message:str source:str line:uint column:uint error:obj
  try
   log error

   let report report_init error

   report_log report

   let txt report_render report
   let txt arr txt "" "Refresh the page or go to another URL to continue."
   let txt join txt

   assign document.title report.title

   let dialog dom_dialog

   dom_font_family dialog "monospace"
   dom_font_size dialog "1.3vw"

   let pre dom_pre

   dom_text pre txt
   dom_push dialog pre
   dom_push body dialog
   dom_modal dialog

   gn_run report_error report
  catch e
   fallback_error "on-error" e error
  end
  
  ret true
 end

 assign global.html document.documentElement
 assign global.body document.body

 assign window.onerror value on_error
end
