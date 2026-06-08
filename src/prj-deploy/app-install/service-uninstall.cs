fn service_uninstall app:str
 let path concat "/etc/systemd/system/" app ".service"

 systemctl "stop" app
 systemctl "disable" app
 //sudo "rm" path
 sudo_fs_remove path
 systemctl "daemon-reload"
 systemctl "reset-failed"
end
