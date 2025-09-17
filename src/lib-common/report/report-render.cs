fn report_render report:obj

 let a arr

 let s paren report.title
 let s space "An error has occured" s
 let s concat s "."

 push a s

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
  push a report.js

 ret join a
end
