gn init x:etc
 os_system "sudo" "rm" "-rf" "/var/lib/apt/lists/*"
 run os_prompt "sudo" "apt" "-o" "update"
end
