fn trace x:etc
 //stringify

 let s stringify x:etc

 //multiline

 if is_txt s
  for split s
   trace v
  end

  ret
 end

 //verbose

 if is_verbose
  log "trace>" s //will call log_append

  ret
 end

 //silent
 //shown only in case of an error

 push traces s //global

 if gt traces.length 32
  shift traces

 //always written to log file

 log_append "trace>" s
end