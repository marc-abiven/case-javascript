gn upload x:etc
 let args dup x

 if extract args "--reset"
  erase www
  
 var all true

 if extract args "--abripourtous"
  run abripourtous args:etc  
  assign all false
 end
  
 if extract args "--aft"
  run aft args:etc
  assign all false
 end

 if extract args "--marc-abiven"
  run marc_abiven args:etc
  assign all false
 end

 if extract args "--vps"
  run vps args:etc
  assign all false
 end

 if extract args "--vps-jneeg-server"
  run vps_jneeg_server args:etc
  assign all false
 end
  
 if extract args "--vps-server"
  run vps_server args:etc
  assign all false
 end

 if all
  run abripourtous args:etc  
  run aft args:etc
  run marc_abiven args:etc
  run vps_jneeg_server args:etc
  run vps_server args:etc
 end

 if is_full args
  let s to_lit "args"

  log "unsupported" s args

  stop
 end
end
