gn init x:etc
 //allow port lesser than 1024

 log process.execPath

 os_system "sudo" "setcap" "cap_net_bind_service=+ep" process.execPath
 os_system "sudo" "getcap" process.execPath
end
