gn vps_jneeg_server x:etc
 let token app_token "vps"

 flower "vps-jneeg-server"

 if contain x "--install"
  os_system "./make" "install" "--kill" "--detach" "--jneeg-server"  "--quiet"
 else
  os_system "./make" "jneeg-server" "--compile"  "--quiet"

 run vps

 run ssh_system token "ssh" login_vps "cmd-kill" "out-jneeg-server.js"  "--quiet"
 run ssh_system token "ssh" login_vps "cmd-detach" "cmd-jneeg-server" "--port" 81 "--random"  "--quiet"
end
