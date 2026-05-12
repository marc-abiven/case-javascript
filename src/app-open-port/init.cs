gn init x:etc
 log binary

 sudo "setcap" "cap_net_bind_service=+ep" binary
 sudo "getcap" binary
end
