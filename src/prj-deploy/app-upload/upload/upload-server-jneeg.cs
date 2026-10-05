gn upload_server_jneeg x:etc
 let token app_token "merlin"

 if contain x "--install"
  os_system "./make" "install" "--kill" "--detach" "--server-jneeg" "--quiet"
 else
  os_system "./make" "server-jneeg" "--compile"  "--quiet"

 run upload_merlin

 run ssh token login_merlin "cmd-kill" "out-server-jneeg.js"  "--quiet"
 run ssh token login_merlin "cmd-detach" "cmd-server-jneeg" "--port" 81 "--random"  "--quiet" "--no-log"
end
