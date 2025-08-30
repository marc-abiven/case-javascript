fn report_log report
 check is_obj report

 flower report.title
 
 if is_full report.browser
  log report.browser

 if is_full report.server
  log report.server
 
 if is_full report.trace
  log report.trace

 if is_full report.cs
  log report.cs

 if is_full report.backtrace
  log report.backtrace

 if gt verbose 0
  if is_full report.js
   log report.js
 end
 
 let message to_lit report.message
 let end space "end-report" report.app "/" message
 
 flower end
end
