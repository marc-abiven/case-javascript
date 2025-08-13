gn vps_jneeg_server
 vps

 let token app_token "vps"
 let s run ssh_system token "ssh" login_vps "ps" "aux"
 
 forof split s
  let s replace_rec v "  " " "
  
  if contain s "jneeg-server.js"
   let a split s " "   
   let pid at a 1   
   let pid to_uint pid
   
   log "kill" pid
   
   run ssh_system token "ssh" login_vps "kill" pid
  end
 end
 
 run ssh_system token "ssh" login_vps "case-javascript/make-jneeg-server-81-random"
end
