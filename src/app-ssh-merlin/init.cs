gn init x:etc
 let token app_token "merlin"

 run ssh_pass os_system token "ssh" "-tt" login_merlin x:etc "bash" "-i"
end
