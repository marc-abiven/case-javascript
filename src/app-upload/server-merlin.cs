gn server_merlin x:etc
 let token app_token "merlin"

 flower "server-merlin"

 if contain x "--install"
  os_system "./make" "install" "--kill" "--detach" "--server-merlin" "--quiet"
 else
  os_system "./make" "server-merlin" "--compile" "--quiet"

 run merlin

 run ssh_system token "ssh" login_merlin "cmd-kill" "out-server-merlin.js" "--quiet"
 run ssh_system token "ssh" login_merlin "cmd-detach" "cmd-server-merlin" "--quiet"
end
