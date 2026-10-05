gn app_on_report_post stm:obj event:str report:obj args:etc
 var time 2

 while true
  let domain "mabynogy.hd.free.fr"
  let uri "/report"
  let url concat location.protocol "//" domain uri //the protocol has the colon
  var result null

  try
   assign result run xhr_post url report
  catch
  end

  let o obj result
  let s obj_option o

  log "report" s

  if same result "ok"
   brk

  let _time time_delay time
  let o obj _time
  let s obj_option o

  log "wait" s

  run sleep time

  assign time mul time 2
 end

 ret "error"
end