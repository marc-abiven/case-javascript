fn os_shell x:etc
 let result os_execute x:etc
 let command join x " " 
 let command to_lit command
 
 log "shell" command
 
 forof split result
  log " >" v
 end
end
