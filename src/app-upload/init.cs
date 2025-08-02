fn init x:etc 
 assign global.www "/var/www/html"
 
 let args dup x
 var upload_marc_abiven true
 var upload_aft true
 var upload_vps true
 var upload_vps_jneeg_server false
 var upload_abripourtous true
 var option false
 
 if extract args "--reset"
  erase www
 
 if extract args "--marc-abiven"
  assign upload_aft false
  assign upload_vps false
  assign upload_abripourtous false  
  assign option true
 end

 if extract args "--aft"
  assign upload_marc_abiven false
  assign upload_vps false
  assign upload_abripourtous false
  assign option true
 end

 if extract args "--vps"
  assign upload_marc_abiven false
  assign upload_aft false
  assign upload_abripourtous false
  assign option true
 end

 if extract args "--vps-jneeg-server"
  assign upload_marc_abiven false
  assign upload_aft false
  assign upload_vps false
  assign upload_vps_jneeg_server true
  assign upload_abripourtous false
  assign option true
 end

 if extract args "--abripourtous"
  assign upload_marc_abiven false
  assign upload_aft false
  assign upload_vps false
  assign option true
 end
  
 if is_full args
  log args
  
  let s to_lit "args"
  
  log "unsupported" s
  
  ret
 end
 
 if upload_marc_abiven
  marc_abiven

  //if option
  // open "https://marc-abiven.github.io/cv"
 end
 
 if upload_aft
  aft
  
  //if option
  // open "https://transhumanistes.github.io"
 end
 
 if upload_vps
  vps
 
 if upload_vps_jneeg_server
  vps_jneeg_server
  
  if option
   open "http://mabynogy.org:81"
 end
 
 if upload_abripourtous
  abripourtous

  //if option
  // open "https://abripourtous.fr"
 end
end
