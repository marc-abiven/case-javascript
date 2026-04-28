gn service_uninstall app:str
 let path concat "/etc/systemd/system/" app ".service"

 run os_prompt "sudo" "systemctl" "stop" app
 run os_prompt "sudo" "systemctl" "disable" app
 run os_prompt "sudo" "rm" path
 run os_prompt "sudo" "systemctl" "daemon-reload"
 run os_prompt "sudo" "systemctl" "reset-failed"
end
