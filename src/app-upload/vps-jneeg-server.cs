gn vps_jneeg_server
 let token app_token "vps"

 run vps

 run ssh_system token "ssh" login_vps "cmd-kill" "jneeg-server.js"
 run ssh_system token "ssh" login_vps "cmd-detach" "cmd-jneeg-server" "--port" 81 "--random"
end