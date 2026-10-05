gn init x
 let token app_token "merlin"
 let target concat login_merlin ":/home"
 let home os_home
 let mnt path_concat home "merlin"

 mnt_clean mnt
 dir_make mnt

 let a arr
 let argv ssh_argv

 push a "sshfs"
 append a argv
 push a target
 push a mnt

 run ssh_pass token a:etc
end
