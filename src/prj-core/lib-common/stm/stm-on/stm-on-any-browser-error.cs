fn stm_on_any_browser_error stm:obj event:str error:obj args:etc
 //report error

 gn report_error error:obj
  while true
   let url concat location.protocol "//mabynogy.org/report"
   let result run xhr_post url report

   if is_false result
    run sleep 32

    cont
   end

   let o obj result
   let s obj_option o

   log "report" s

   ret
  end
 end

 //main

 let report report_init error

 report_log report

 let txt report_render report

 assign document.title report.mesage

 let dialog dom_dialog

 dom_font_family dialog font_family
 dom_font_size dialog font_size

 let pre dom_pre

 dom_text pre txt
 dom_push dialog pre
 dom_push body dialog
 dom_modal dialog

 //report

 stm_run stm report_error error
end
