gn server_on_mabynogy_report context:obj
 check same context.method "post"

 let report run server_load context.server context.request
 let s capture report_log report
 let prompt concat context.remote "> "
 let s txt_prepend s prompt

 log s

 //mail

 report_mail report

 ret "ok"
end