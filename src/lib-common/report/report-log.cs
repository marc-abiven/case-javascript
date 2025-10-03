fn report_log report:obj
 let title report_title report

 flower_box title

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

 let end space "end-report" report.app "/" report.message

 flower end
end