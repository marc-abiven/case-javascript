fn erase x:str
 os_system "sudo" "rm" "--recursive" x
 os_system "sudo" "mkdir" x
end
