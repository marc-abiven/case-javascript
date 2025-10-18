gn on_mabynogy_report context:obj
 check same context.method "post"

 let report run server_load context.server context.request

 report_log report
 report_mail report

 ret "ok"
end
