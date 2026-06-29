fn trace x:etc
 //mutiline

 if is_single x
  let first front x

  if is_str first
   let a split first

   if is_many a
    for a
     trace v
    end

    ret
   end
  end
 end

 //stringify

 let s stringify x:etc

 //log

 if gte verbose 1
  //verbose

  log "trace>" s
 else
  //silent
  //shown only in case of an error

  push traces s //global

  if gt traces.length 64
   shift traces

  //always written to log file

  log_append "trace>" s
 end
end
