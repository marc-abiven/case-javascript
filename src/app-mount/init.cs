gn init x
 let token app_token "vps"
 let target concat login_vps ":/home"
 let home os_home
 let mnt path_concat home "vps"

 mnt_clean mnt
 dir_make mnt
 run ssh_pass os_detach token "sshfs" "-o" "sshfs_debug" target mnt
end