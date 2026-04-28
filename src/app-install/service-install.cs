gn service_install app:str target:str
 let path concat "/etc/systemd/system/" app ".service"
 let base concat "cmd-" app
 let cmd path_concat target base

 check is_file cmd

 let content arr

 push content "[Service]"

 let s concat "ExecStart=" cmd

 push content s

 let user os_user
 let s concat "User=" user

 push content s

 push content ""
 push content "[Install]"
 push content "WantedBy=multi-user.target"

 let content join content

 sudo_file_save path content

 run os_prompt "sudo" "systemctl" "daemon-reload"
 run os_prompt "sudo" "systemctl" "enable" app
 run os_prompt "sudo" "systemctl" "start" app
end
