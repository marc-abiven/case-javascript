fn os_open_port
 let o obj binary
 let s obj_option o

 log "open-port" s

 silent sudo os_run "setcap" "cap_net_bind_service=ep" binary
 silent sudo os_run "getcap" binary
end
