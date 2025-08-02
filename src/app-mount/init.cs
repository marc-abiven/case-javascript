fn init x
 let token app_token "vps"
 let target concat login_vps ":/home"
 let home call os_home
 let mnt path_concat home "vps"
 
 mnt_clean mnt
 dir_make mnt
 os_detach "sshpass" "-p" token "sshfs" "-o" "sshfs_debug" target mnt
end
