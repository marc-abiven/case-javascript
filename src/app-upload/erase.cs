fn erase x
 check is_str x

 os_system "sudo" "rm" "--recursive" x
 os_system "sudo" "mkdir" x
end