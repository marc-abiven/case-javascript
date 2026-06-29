fn service_uninstall app:str
 let path concat "/etc/systemd/system/" app ".service"

 if not is_file path
  ret

 systemctl "stop" app
 systemctl "disable" app
 sudo_fs_remove path
 systemctl "daemon-reload"
 systemctl "reset-failed"
end