gn init x
 let token app_token "merlin"
 let target concat login_merlin ":/home"
 let home os_home
 let mnt path_concat home "merlin"

 mnt_clean mnt
 dir_make mnt
 run ssh_pass os_detach token "sshfs" "-o" "sshfs_debug" target mnt
end
