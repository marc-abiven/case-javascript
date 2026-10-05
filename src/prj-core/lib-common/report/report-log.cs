fn report_log report:obj
 let a arr

 forin report
  if same k "message"
   cont

  if is_empty v
   cont

  push a v
 end

 let end space "end-report" meta.app "/" report.message
 let end capture flower end

 push a end

 //a single log to avoid the worker thread to split the log
 //(it doesn't work well)

 let s join a

 log s
end
