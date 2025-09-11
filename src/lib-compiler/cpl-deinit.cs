fn cpl_deinit x:obj
 let s json_dump x.cache

 file_save x.path s
end
