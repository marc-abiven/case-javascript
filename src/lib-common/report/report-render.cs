fn report_render report
 check is_obj report
 
 let a arr

 let s paren report.title
 let s space "An error has occured" s
 let s concat s "."

 push a s
 push a ""

 if is_full report.browser
  push a report.browser
  push a ""
 end

 if is_full report.server
  push a report.server
  push a ""
 end
 
 if is_full report.trace
  push a report.trace
  push a ""
 end

 if is_full report.cs
  push a report.cs
  push a ""
 end

 if is_full report.backtrace
  push a report.backtrace
  push a ""
 end

 if is_full report.js
  push a report.js

 ret join a
end
