fn ip_v4
 forof ip_list
  if is_ip4 v
   ret v
 end

 stop
end