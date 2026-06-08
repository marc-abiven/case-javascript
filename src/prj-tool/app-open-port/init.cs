gn init x:etc
 let o obj binary
 let s obj_option o
 
 log "open-port" s

 sudo "setcap" "cap_net_bind_service=+ep" binary
 sudo "getcap" binary
end
