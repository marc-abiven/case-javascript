gn init x:etc
 //set config bantime
 
 fn set_config_bantime x:uint 
  let path "/etc/fail2ban/jail.conf"
  let pattern "bantime="
  let option concat pattern x
  
  config_replace path pattern option    
 end
 
 //get ips
 
 fn get_ips
  let r sudo os_execute "fail2ban-client" "status" "sshd"
  let r split r
  let r back r
  let r split r "\t"
  let r back r
  let r split r " "
  
  ret r
 end
 
 //set bantime

 fn set_bantime x
  check is_uint x
  
  sudo os_execute "fail2ban-client" "set" "sshd" "bantime" x
 end
 
 //get bantime
 
 fn get_bantime
  let r sudo os_execute "fail2ban-client" "get" "sshd" "bantime"
  let r to_uint r
  
  ret r
 end
 
 //main
 
 //bantime
 
 let bantime mul 8 day
 
 set_config_bantime bantime
 set_bantime bantime
 
 let n get_bantime

 check same n bantime

 let bantime time_delay bantime
 
 dump bantime
 
 let a arr
 var t arr
 
 forof get_ips
  let ip v
  let host ip_host ip
  let o obj ip host
  
  push t o
 end
 
 assign t tbl_render t
 
 log t  
 
 //upload
 
 if is_remote
  ret
  
 os_execute "cmd-install" "--fail2ban" "--quiet"
 
 //remote

 flower "remote"

 let token app_token "merlin"

 run ssh_pass os_prompt token "ssh" login_merlin "cmd-fail2ban" "--quiet"
end
