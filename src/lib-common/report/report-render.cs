fn report_render report:obj human
 if is_undef human
  ret report_render report true

 //log title

 fn log_title
  let title report_title report

  flower_box title
 end

 //main

 let a arr
 let title capture log_title

 push a title

 if is_full report.browser
  push a ""
  push a report.browser
 end

 if is_full report.server
  push a ""
  push a report.server
 end

 if is_full report.trace
  push a ""
  push a report.trace
 end

 if is_full report.cs
  push a ""
  push a report.cs
 end

 if is_full report.backtrace
  push a ""
  push a report.backtrace
 end

 if is_full report.js
  push a ""
  push a report.js
 end

 if human
  push a ""
  push a "Refresh the page or go to another URL to continue."
 end

 ret join a
end