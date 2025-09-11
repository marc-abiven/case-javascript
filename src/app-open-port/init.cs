gn init x:etc
 log binary

 os_system "sudo" "setcap" "cap_net_bind_service=+ep" binary
 os_system "sudo" "getcap" binary
end
