fn init x:etc
 let token app_token "vps"
 
 os_system "sshpass" "-p" token "ssh" login_vps
end
