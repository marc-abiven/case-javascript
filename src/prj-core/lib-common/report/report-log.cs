fn report_log report:obj
 forin report
  if same k "message"
   cont

  let v get report k

  if is_empty v
   cont

  if same k "js"
   log3 v
  else
   log v
 end

 let end space "end-report" app "/" report.message

 flower end
end