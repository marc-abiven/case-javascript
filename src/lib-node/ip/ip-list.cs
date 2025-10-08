fn ip_list
 let s os_execute "hostname" "--all-ip-addresses"

 ret split s " "
end