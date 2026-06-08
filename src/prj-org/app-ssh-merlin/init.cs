gn init x:etc
 let token app_token "merlin"

 let a arr
 let argv ssh_argv

 push a "ssh"
 append a argv
 push a "-tt"
 push a login_merlin
 append a x
 push a "bash"
 push a "-i"

 run ssh_pass os_system token a:etc
end
