fn init x:etc
 while true
  let status os_system "./make" "install" "--local"

  check os_success status
 end
end
