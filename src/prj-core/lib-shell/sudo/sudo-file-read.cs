fn sudo_file_read path:str
 let result sudo os_run true "cat" path //read binary

 check os_success result

 ret result.out
end
