fn os_sleep x:num
 check gte x 0

 os_execute "sleep" x
end