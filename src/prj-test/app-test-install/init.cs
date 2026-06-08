fn init x:etc
 while true
  let status os_system "./make" "install" "--local"

  if different status 0
   stop
 end
end
