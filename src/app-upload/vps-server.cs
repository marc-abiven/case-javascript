gn vps_server x:etc
 let token app_token "vps"

 flower "vps-server"

 if contain x "--install"
  os_system "./make" "install" "--kill" "--detach" "--server" "--quiet"
 else
  os_system "./make" "server" "--compile" "--quiet"

 run vps

 run ssh_system token "ssh" login_vps "cmd-kill" "out-server.js" "--quiet"
 run ssh_system token "ssh" login_vps "cmd-detach" "cmd-server" "--quiet"
end