fn sudo_read path:str
 let result os_run "sudo" "cat" path
 
 check same result.status 0
 check is_empty result.err
 
 ret result.out 
end
