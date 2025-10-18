fn sudo_file_read path:str
 let result sudo os_run "cat" path

 check same result.status 0
 check is_empty result.err

 ret result.out
end
