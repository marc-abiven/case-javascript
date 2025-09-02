gn init x:etc
 //allow port lesser than 1024

 log binary

 os_system "sudo" "setcap" "cap_net_bind_service=+ep" binary
 os_system "sudo" "getcap" binary
end