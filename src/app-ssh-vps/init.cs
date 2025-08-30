gn init x:etc
 let token app_token "vps"

 run ssh_pass os_system token "ssh" "-tt" login_vps x:etc
end
